import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "light" | "white" | "blush";
}

export default function Section({
  children,
  className,
  id,
  background = "white",
}: SectionProps) {
  const backgrounds = {
    light: "bg-dusty-blush",
    white: "bg-white",
    blush: "bg-blush",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 lg:py-32",
        backgrounds[background],
        className
      )}
    >
      {children}
    </section>
  );
}

