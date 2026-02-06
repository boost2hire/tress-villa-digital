import { MapPin, Phone, Clock, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import BookingForm from "@/components/BookingForm";
import {
  SALON_ADDRESS,
  SALON_PHONE,
  SALON_PHONE_DISPLAY,
  WHATSAPP_BOOK,
  OPENING_TIME,
  CLOSING_TIME,
  WORKING_DAYS,
  GOOGLE_MAP_EMBED,
} from "@/lib/constants";

const ContactPage = () => (
  <main>
    <Navbar />
    <PageHeader
      title="Contact Us"
      subtitle="Book an appointment or drop by our salon."
    />

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="text-foreground font-medium">{SALON_ADDRESS}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href={`tel:${SALON_PHONE}`} className="text-foreground font-medium hover:text-primary transition-colors">
                        {SALON_PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Opening Time</p>
                      <p className="text-foreground font-medium">{OPENING_TIME} – {CLOSING_TIME}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Working Days</p>
                      <p className="text-foreground font-medium">{WORKING_DAYS}</p>
                    </div>
                  </div>
                </div>
              </div>

              <a href={WHATSAPP_BOOK} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </a>

              {/* Google Map */}
              <div className="aspect-video rounded-xl overflow-hidden border border-border/30">
                <iframe
                  src={GOOGLE_MAP_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tress Villa location on Google Maps"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Booking Form */}
          <ScrollReveal direction="right">
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                Book an Appointment
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Fill in the details and we'll confirm via WhatsApp.
              </p>
              <BookingForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default ContactPage;
