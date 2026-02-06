import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

import hairStyling from "@/assets/hair-styling.jpg";
import spaMassage from "@/assets/spa-massage.jpg";
import bridalMakeup from "@/assets/bridal-makeup.jpg";
import beardGrooming from "@/assets/beard-grooming.jpg";
import beautyProducts from "@/assets/beauty-products.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const galleryImages = [
  { src: hairStyling, alt: "Hair styling at Tress Villa" },
  { src: bridalMakeup, alt: "Bridal makeup" },
  { src: spaMassage, alt: "Spa massage therapy" },
  { src: beardGrooming, alt: "Beard grooming" },
  { src: beautyProducts, alt: "Premium beauty products" },
  { src: heroBg, alt: "Tress Villa salon interior" },
];

const GalleryPreview = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <SectionHeading
        subtitle="Gallery"
        title="Our Work"
        description="A glimpse into the artistry and care we bring to every client."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((img, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <div className="group relative aspect-square rounded-xl overflow-hidden border border-border/30">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="text-center mt-12">
        <Link to="/gallery">
          <Button variant="outline-gold" size="lg">
            View Full Gallery
          </Button>
        </Link>
      </ScrollReveal>
    </div>
  </section>
);

export default GalleryPreview;
