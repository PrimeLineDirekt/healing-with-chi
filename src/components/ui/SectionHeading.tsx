import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  as: Tag = "h2",
  light = false,
}: SectionHeadingProps) {
  const sizes = {
    h1: "text-4xl md:text-5xl lg:text-6xl",
    h2: "text-3xl md:text-4xl",
    h3: "text-2xl md:text-3xl",
  };

  return (
    <div className={cn(centered && "text-center", "mb-10 md:mb-14", className)}>
      <Tag
        className={cn(
          "font-heading font-semibold",
          sizes[Tag],
          light ? "text-white" : "text-text"
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-lg md:text-xl font-body",
            light ? "text-sand-light/80" : "text-text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
