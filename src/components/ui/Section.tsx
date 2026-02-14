import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "surface" | "sand" | "sage" | "dark";
  padding?: "default" | "sm" | "lg" | "none";
}

const bgMap = {
  default: "bg-background",
  surface: "bg-surface",
  sand: "bg-sand-light",
  sage: "bg-sage-light/30",
  dark: "bg-text text-sand-light",
};

const paddingMap = {
  default: "py-16 md:py-24",
  sm: "py-10 md:py-16",
  lg: "py-20 md:py-32",
  none: "",
};

export default function Section({
  children,
  className,
  id,
  background = "default",
  padding = "default",
}: SectionProps) {
  return (
    <section id={id} className={cn(bgMap[background], paddingMap[padding], className)}>
      <div className="container-site">{children}</div>
    </section>
  );
}
