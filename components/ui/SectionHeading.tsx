interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg md:text-xl max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/50" : "text-foreground-muted"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-0.5 w-16 bg-accent ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
