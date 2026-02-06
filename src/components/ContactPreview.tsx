import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
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

const contactInfo = [
  { icon: MapPin, label: "Address", value: SALON_ADDRESS },
  { icon: Phone, label: "Phone", value: SALON_PHONE_DISPLAY },
  { icon: Clock, label: "Hours", value: `${OPENING_TIME} – ${CLOSING_TIME}` },
  { icon: MessageCircle, label: "Working Days", value: WORKING_DAYS },
];

const ContactPreview = () => (
  <section className="section-padding bg-section-alt">
    <div className="container mx-auto">
      <SectionHeading
        subtitle="Get In Touch"
        title="Visit Us Today"
        description="We'd love to welcome you to our salon."
      />

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollReveal direction="left">
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            <a href={WHATSAPP_BOOK} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="mt-4 gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
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
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default ContactPreview;
