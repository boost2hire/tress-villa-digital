import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Instagram, Facebook } from "lucide-react";
import {
  SALON_NAME,
  SALON_ADDRESS,
  SALON_PHONE,
  SALON_PHONE_DISPLAY,
  WHATSAPP_BOOK,
  OPENING_TIME,
  CLOSING_TIME,
} from "@/lib/constants";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => (
  <footer className="bg-card border-t border-border/50">
    <div className="container mx-auto section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl font-bold gold-text-gradient mb-4">
            Tress Villa
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {SALON_NAME} — Your premier destination for hair, beauty, spa, and
            bridal services in Panchkula.
          </p>
          <div className="flex gap-3">
            <a
              href={WHATSAPP_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-whatsapp/10 border border-whatsapp/20 flex items-center justify-center text-whatsapp hover:bg-whatsapp hover:text-whatsapp-foreground transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href={`tel:${SALON_PHONE}`}
              className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
            Contact
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              {SALON_ADDRESS}
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              {SALON_PHONE_DISPLAY}
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {OPENING_TIME} – {CLOSING_TIME}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © 2026 {SALON_NAME}. All Rights Reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Made by <span className="text-primary">Piyush</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
