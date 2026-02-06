import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import hairStyling from "@/assets/hair-styling.jpg";
import spaMassage from "@/assets/spa-massage.jpg";
import bridalMakeup from "@/assets/bridal-makeup.jpg";
import beardGrooming from "@/assets/beard-grooming.jpg";
import beautyProducts from "@/assets/beauty-products.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const galleryCategories = [
  {
    name: "Bridal Looks",
    images: [
      { src: bridalMakeup, alt: "Bridal makeup look" },
      { src: beautyProducts, alt: "Bridal beauty setup" },
    ],
  },
  {
    name: "Hair Styling",
    images: [
      { src: hairStyling, alt: "Professional hair styling" },
      { src: heroBg, alt: "Salon styling station" },
    ],
  },
  {
    name: "Spa & Massage",
    images: [
      { src: spaMassage, alt: "Spa massage therapy" },
      { src: beautyProducts, alt: "Spa products" },
    ],
  },
  {
    name: "Grooming",
    images: [
      { src: beardGrooming, alt: "Beard grooming" },
      { src: hairStyling, alt: "Men's styling" },
    ],
  },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main>
      <Navbar />
      <PageHeader
        title="Gallery"
        subtitle="A showcase of our finest work and luxurious environment."
      />

      <section className="section-padding">
        <div className="container mx-auto space-y-16">
          {galleryCategories.map((category, ci) => (
            <ScrollReveal key={category.name} delay={ci * 0.05}>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {category.name}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(img.src)}
                      className="group relative aspect-square rounded-xl overflow-hidden border border-border/30 cursor-pointer"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                        <span className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                          View
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="w-full h-auto rounded-xl"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  );
};

export default GalleryPage;
