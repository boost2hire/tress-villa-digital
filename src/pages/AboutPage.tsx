import { CheckCircle, Target, Eye, Award, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "24+", label: "Years of Excellence" },
  { value: "10K+", label: "Happy Clients" },
  { value: "50+", label: "Expert Staff" },
  { value: "100%", label: "Satisfaction" },
];

const values = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "We use only the finest international products and stay updated with the latest global trends in beauty and styling.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description:
      "Every client is treated like family. We listen, understand, and deliver personalized experiences every time.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide world-class grooming and wellness services that empower our clients to look and feel their best.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the most trusted and loved salon brand in the region, setting new benchmarks in quality and service.",
  },
];

const AboutPage = () => (
  <main>
    <Navbar />
    <PageHeader
      title="About Us"
      subtitle="Discover the story behind Tress Villa's legacy of excellence."
    />

    {/* Intro Section */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border/30">
                <img
                  src={heroBg}
                  alt="Inside Tress Villa salon"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/20 -z-10" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3 block">
              Our Story
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              24+ Years of Crafting Confidence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded over two decades ago, Tress Villa Unisex Salon & Spas has
              grown from a humble beginning into one of Panchkula's most trusted
              names in beauty and wellness. Our journey is built on a foundation
              of passion, expertise, and an unwavering commitment to our clients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Located in the heart of Sector 5, Panchkula, we offer a
              comprehensive range of services — from precision haircuts and
              relaxing spa treatments to stunning bridal transformations. Every
              visit is designed to leave you feeling renewed and confident.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-section-alt border-y border-border/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <span className="text-4xl md:text-5xl font-heading font-bold gold-text-gradient">
                  {stat.value}
                </span>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What Drives Us
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-12 gold-gradient" />
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="h-px w-12 gold-gradient" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover-gold-glow h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default AboutPage;
