import { Scissors, User, Sparkles, Heart, Flower2, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { serviceCategories, WHATSAPP_BOOK } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  hair: Scissors,
  beard: User,
  skin: Sparkles,
  beauty: Heart,
  spa: Flower2,
  bridal: Crown,
};

const ServicesPage = () => (
  <main>
    <Navbar />
    <PageHeader
      title="Our Services"
      subtitle="Comprehensive grooming & beauty solutions tailored for you."
    />

    <section className="section-padding">
      <div className="container mx-auto space-y-16">
        {serviceCategories.map((category, ci) => {
          const Icon = iconMap[category.id] || Sparkles;
          return (
            <ScrollReveal key={category.id} delay={ci * 0.05}>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    {category.name}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="bg-card rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-500 hover-gold-glow flex flex-col"
                    >
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-1.5">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {service.description}
                      </p>
                      <a href={WHATSAPP_BOOK} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-gold" size="sm" className="w-full">
                          Book Now
                        </Button>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>

    <Footer />
  </main>
);

export default ServicesPage;
