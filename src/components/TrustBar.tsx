import { Award, Users, Gem, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const trustItems = [
  { icon: Award, label: "20+ Years Experience" },
  { icon: Users, label: "Professional Staff" },
  { icon: Gem, label: "Premium Products" },
  { icon: Sparkles, label: "Relaxing Spa Services" },
];

const TrustBar = () => (
  <section className="py-12 md:py-16 border-y border-border/50">
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {trustItems.map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 0.1}>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground/90 tracking-wide">
                {item.label}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
