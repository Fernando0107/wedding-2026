import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import TableFinder from "@/components/TableFinder";

export const metadata: Metadata = {
  title: siteConfig.content.tables.metaTitle,
  robots: { index: false, follow: false },
};

export default function MesasPage() {
  return (
    <main id="main-content" className="min-h-dvh">
      <TableFinder />
    </main>
  );
}
