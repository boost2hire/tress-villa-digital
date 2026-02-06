import { UserCheck, ShieldCheck, BadgeIndianRupee, HeadsetIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    icon: UserCheck,
    title: "Expert Stylists",
    description: "Highly trained professionals with years of industry experience.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Environment",
    description: "We maintain the highest standards of cleanliness and hygiene.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Pricing",
    description: "Premium services at prices that won't break the bank.",
  },
  {
    icon: HeadsetIcon,
    title: "Customer Support",
    description: "Dedicated support to ensure your complete satisfaction.",
  },
];

const WhyUs = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <SectionHeading
        subtitle="Why Choose Us"
        title="The Tress Villa Difference"
        description="We go above and beyond to deliver an exceptional experience every visit."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, i) => (
          <ScrollReveal key={reason.title} delay={i * 0.1}>
            <div className="text-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover-gold-glow h-full">
              <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-5">
                <reason.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
