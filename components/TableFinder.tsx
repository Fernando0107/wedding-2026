"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Search, X } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { normalizeName, tableGuests, type TableGuest } from "@/lib/mesas";
import Button from "@/components/ui/Button";

const content = siteConfig.content.tables;

const guestsByLetter = tableGuests.reduce<{ letter: string; guests: TableGuest[] }[]>(
  (groups, guest) => {
    const letter = guest.searchKey[0].toUpperCase();
    const last = groups[groups.length - 1];
    if (last?.letter === letter) last.guests.push(guest);
    else groups.push({ letter, guests: [guest] });
    return groups;
  },
  []
);

function getSearchTerms(query: string): string[] {
  return normalizeName(query).split(/\s+/).filter(Boolean);
}

// Marca sobre la versión normalizada; NFD + quitar diacríticos conserva la longitud,
// así que los índices coinciden con el nombre original.
function HighlightedName({ name, terms }: { name: string; terms: string[] }) {
  if (!terms.length) return <>{name}</>;

  const normalized = normalizeName(name);
  const marked = new Array<boolean>(name.length).fill(false);
  for (const term of terms) {
    for (let i = normalized.indexOf(term); i > -1; i = normalized.indexOf(term, i + 1)) {
      marked.fill(true, i, i + term.length);
    }
  }

  const parts: { text: string; marked: boolean }[] = [];
  for (let i = 0; i < name.length; i++) {
    const last = parts[parts.length - 1];
    if (last?.marked === marked[i]) last.text += name[i];
    else parts.push({ text: name[i], marked: marked[i] });
  }

  return (
    <>
      {parts.map((part, i) =>
        part.marked ? (
          <mark key={i} className="bg-vintage-pink text-rosewood rounded-sm">
            {part.text}
          </mark>
        ) : (
          <Fragment key={i}>{part.text}</Fragment>
        )
      )}
    </>
  );
}

function GuestRow({
  guest,
  terms,
  onSelect,
}: {
  guest: TableGuest;
  terms: string[];
  onSelect: (guest: TableGuest) => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(guest)}
        className="group flex w-full min-h-12 items-baseline justify-between gap-4 border-b border-vintage-pink/80 px-1 py-3 text-left transition-colors focus-visible:rounded-md"
      >
        <span className="font-serif text-lg text-rosewood group-hover:text-dusty-rose">
          <HighlightedName name={guest.name} terms={terms} />
        </span>
        <span className="whitespace-nowrap font-sans text-sm text-mauve/70 tabular-nums">
          {content.tableLabel} <b className="font-semibold text-rosewood">{guest.table}</b>
        </span>
      </button>
    </li>
  );
}

export default function TableFinder() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<TableGuest | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultHeadingRef = useRef<HTMLHeadingElement>(null);
  const focusSearchRef = useRef(false);
  const reduceMotion = useReducedMotion();

  const terms = getSearchTerms(query);
  const hits = tableGuests.filter((guest) => terms.every((term) => guest.searchKey.includes(term)));
  const tableMates = selected
    ? tableGuests.filter((guest) => guest.table === selected.table && guest !== selected)
    : [];

  useEffect(() => {
    if (selected) {
      window.scrollTo({ top: 0, behavior: "instant" });
      resultHeadingRef.current?.focus({ preventScroll: true });
    } else if (focusSearchRef.current) {
      focusSearchRef.current = false;
      inputRef.current?.focus();
    }
  }, [selected]);

  function clearSearch() {
    setQuery("");
    inputRef.current?.focus();
  }

  function searchAgain() {
    focusSearchRef.current = true;
    setQuery("");
    setSelected(null);
  }

  return (
    <div className="mx-auto max-w-xl px-5 pt-12 pb-20">
      <header className="mb-6 text-center">
        <h1 className="font-heading text-5xl leading-tight text-rosewood">
          {content.title}{" "}
          <span className="font-script text-6xl text-dusty-rose">{content.titleScript}</span>
        </h1>
        <div className="my-5 flex items-center justify-center gap-4" aria-hidden="true">
          <div className="h-px w-12 bg-dusty-rose/40" />
          <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <div className="h-px w-12 bg-dusty-rose/40" />
        </div>
        {!selected && <p className="font-sans text-lg text-mauve">{content.intro}</p>}
      </header>

      {selected ? (
        <section aria-labelledby="table-result" className="pt-2 text-center">
          <h2 id="table-result" ref={resultHeadingRef} tabIndex={-1}>
            <span className="block font-serif text-2xl text-rosewood">{selected.name}</span>
            <span className="mt-6 block font-script text-4xl text-gold-dark">{content.resultTag}</span>
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="block font-serif text-[clamp(7rem,40vw,10rem)] leading-none text-dusty-rose lining-nums tabular-nums"
            >
              {selected.table}
            </motion.span>
          </h2>

          {tableMates.length > 0 && (
            <div className="mx-auto mt-8 max-w-sm rounded-2xl bg-blush/50 px-6 py-5 shadow-soft">
              <p className="mb-3 font-sans italic text-mauve/70">{content.tableMatesLabel}</p>
              <ul className="columns-2 gap-x-6 font-serif text-rosewood max-[360px]:columns-1">
                {tableMates.map((guest) => (
                  <li key={guest.name} className="break-inside-avoid py-0.5">
                    {guest.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Button variant="outline" className="mt-10" onClick={searchAgain}>
            {content.searchAgain}
          </Button>
        </section>
      ) : (
        <>
          <div className="sticky top-0 z-10 -mx-5 bg-background/95 px-5 py-3 backdrop-blur-sm">
            <label htmlFor="table-search" className="sr-only">
              {content.searchLabel}
            </label>
            <div className="relative">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-mauve/50"
              />
              <input
                id="table-search"
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
                placeholder={content.searchPlaceholder}
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                enterKeyHint="search"
                className="h-14 w-full appearance-none rounded-full border border-vintage-pink bg-white pr-14 pl-12 font-sans text-lg text-rosewood shadow-soft transition-shadow placeholder:text-mauve/50 placeholder:italic focus:border-dusty-rose focus:ring-4 focus:ring-dusty-rose/15 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={clearSearch}
                  aria-label={content.clearLabel}
                  className="absolute top-1/2 right-1.5 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-mauve/60 hover:bg-blush hover:text-dusty-rose"
                >
                  <X aria-hidden="true" className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          <p role="status" className="sr-only">
            {terms.length > 0 &&
              `${hits.length} ${hits.length === 1 ? content.resultSingular : content.resultPlural}`}
          </p>

          {terms.length === 0 ? (
            guestsByLetter.map(({ letter, guests }) => (
              <section key={letter} aria-labelledby={`letter-${letter}`}>
                <h2 id={`letter-${letter}`} className="mt-8 mb-1 font-serif text-3xl text-dusty-rose">
                  {letter}
                </h2>
                <ul>
                  {guests.map((guest) => (
                    <GuestRow key={guest.name} guest={guest} terms={terms} onSelect={setSelected} />
                  ))}
                </ul>
              </section>
            ))
          ) : hits.length > 0 ? (
            <ul className="mt-2">
              {hits.map((guest) => (
                <GuestRow key={guest.name} guest={guest} terms={terms} onSelect={setSelected} />
              ))}
            </ul>
          ) : (
            <p className="px-1 py-6 font-sans italic text-mauve/70">
              {content.noResults} &ldquo;{query.trim()}&rdquo;. {content.noResultsHint}
            </p>
          )}
        </>
      )}
    </div>
  );
}
