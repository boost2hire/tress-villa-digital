import { Scissors, User, Sparkles, Heart, Flower2, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WHATSAPP_BOOK, homeServices } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  "Hair Styling": Scissors,
  "Beard Grooming": User,
  "Facial & D-Tan": Sparkles,
  "Waxing & Threading": Heart,
  "Massage Therapy": Flower2,
  "Bridal Makeup": Crown,
};

const ServicesPreview = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <SectionHeading
        subtitle="Our Services"
        title="What We Offer"
        description="From precision haircuts to rejuvenating spa treatments, experience the finest in grooming and beauty care."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {homeServices.map((service, i) => {
          const Icon = iconMap[service.name] || Sparkles;
          return (
            <ScrollReveal key={service.name} delay={i * 0.08}>
              <div className="group relative bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover-gold-glow">
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-5">
                  {service.description}
                </p>
                <a href={WHATSAPP_BOOK} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-gold" size="sm">
                    Book Now
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal className="text-center mt-12">
        <Link to="/services">
          <Button variant="outline-gold" size="lg">
            View All Services
          </Button>
        </Link>
      </ScrollReveal>
    </div>
  </section>
);

export default ServicesPreview;
