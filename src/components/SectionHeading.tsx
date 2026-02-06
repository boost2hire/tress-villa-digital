import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  align = "center",
}: SectionHeadingProps) => (
  <ScrollReveal className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    {subtitle && (
      <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3 block">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
        {description}
      </p>
    )}
    <div className="mt-6 flex items-center justify-center gap-2">
      <span className="h-px w-12 gold-gradient" />
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      <span className="h-px w-12 gold-gradient" />
    </div>
  </ScrollReveal>
);

export default SectionHeading;
