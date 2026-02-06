import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_BOOK, SALON_SHORT, SALON_PHONE } from "@/lib/constants";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-border/50"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold gold-text-gradient">
            {SALON_SHORT}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${SALON_PHONE}`}>
            <Button variant="ghost" size="sm" className="gap-2 text-foreground/80">
              <Phone className="w-4 h-4" />
              Call
            </Button>
          </a>
          <a href={WHATSAPP_BOOK} target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm">
              Book Now
            </Button>
          </a>
        </div>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 border-b border-border/50" : "max-h-0"
        }`}
      >
        <div className="bg-background/98 backdrop-blur-md px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-2 mt-3 px-4">
            <a href={`tel:${SALON_PHONE}`} className="flex-1">
              <Button variant="outline-gold" size="sm" className="w-full gap-2">
                <Phone className="w-4 h-4" /> Call
              </Button>
            </a>
            <a href={WHATSAPP_BOOK} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="default" size="sm" className="w-full">
                Book Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
