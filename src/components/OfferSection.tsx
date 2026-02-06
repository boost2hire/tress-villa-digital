import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { WHATSAPP_BOOK } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

const OfferSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="container mx-auto">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 p-8 md:p-12 lg:p-16 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Limited Time Offer</span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Luxury Grooming Package
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-2">
              Hair • Facial • Massage • Manicure / Pedicure
            </p>
            <div className="mt-6 mb-8">
              <span className="text-5xl md:text-6xl font-heading font-bold gold-text-gradient">
                ₹2499/-
              </span>
              <p className="text-muted-foreground text-sm mt-2">Limited time only</p>
            </div>
            <a href={WHATSAPP_BOOK} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" className="text-lg px-10 py-4 h-auto">
                Book This Offer
              </Button>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default OfferSection;
