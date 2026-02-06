import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  "24+ Years in Business",
  "Trusted by 10,000+ Clients",
  "100% Customer Satisfaction",
  "Premium International Products",
];

const AboutSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border/30">
              <img
                src={heroBg}
                alt="Tress Villa salon interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/20 -z-10" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3 block">
            About Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Where Beauty Meets Expertise
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            For over two decades, Tress Villa Unisex Salon & Spas has been the
            premier destination for hair, beauty, and wellness in Panchkula.
            Our team of expert stylists and therapists are dedicated to helping
            you look and feel your absolute best.
          </p>
          <div className="space-y-4 mb-8">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/90 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <Link to="/about">
            <Button variant="outline-gold" size="lg">
              Learn More
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
