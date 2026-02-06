export const SALON_NAME = "Tress Villa Unisex Salon & Spas";
export const SALON_SHORT = "Tress Villa";
export const SALON_TAGLINE = "Hair • Beauty • Spa • Bridal • Massage";
export const SALON_ADDRESS = "SCO-12, 3rd Floor, Sector 5, Panchkula, Haryana";
export const SALON_PHONE = "08401704052";
export const SALON_PHONE_DISPLAY = "084-017-04052";
export const WHATSAPP_NUMBER = "917696331155";
export const SALON_RATING = 4.0;
export const SALON_REVIEWS = "120+";
export const SALON_EXPERIENCE = "24+";
export const OPENING_TIME = "9:30 AM";
export const CLOSING_TIME = "8:30 PM";
export const WORKING_DAYS = "Monday – Sunday";

export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_BOOK = `${WHATSAPP_BASE}?text=${encodeURIComponent("Hi, I want to book an appointment")}`;

export const GOOGLE_MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.0!2d76.856!3d30.694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f93a3c0000001%3A0x1!2sTress+Villa+Unisex+Salon!5e0!3m2!1sen!2sin!4v1";

export const getWhatsAppBookingUrl = (
  name: string,
  phone: string,
  service: string,
  date: string,
  message?: string
) => {
  const text = `Hi, I want to book ${service} on ${date}. Name: ${name}, Phone: ${phone}${message ? `. ${message}` : ""}`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
};

export const serviceCategories = [
  {
    id: "hair",
    name: "Hair",
    services: [
      { name: "Hair Cut", description: "Professional cutting for all styles" },
      { name: "Hair Styling", description: "Trending hairstyles and updos" },
      { name: "Hair Smoothening", description: "Keratin smoothening treatments" },
      { name: "Hair Keratin", description: "Premium keratin treatment" },
    ],
  },
  {
    id: "beard",
    name: "Beard & Grooming",
    services: [
      { name: "Beard Trim", description: "Professional beard shaping" },
      { name: "Shaving", description: "Premium hot towel shave" },
      { name: "Face Cleanup", description: "Deep cleansing facial" },
    ],
  },
  {
    id: "skin",
    name: "Skin Care",
    services: [
      { name: "Facial", description: "Rejuvenating facial treatments" },
      { name: "D-Tan", description: "Advanced de-tanning therapy" },
      { name: "Bleach", description: "Skin brightening bleach" },
    ],
  },
  {
    id: "beauty",
    name: "Beauty",
    services: [
      { name: "Threading", description: "Precise eyebrow threading" },
      { name: "Waxing", description: "Full body waxing services" },
      { name: "Manicure", description: "Luxury nail care & art" },
      { name: "Pedicure", description: "Relaxing foot spa & care" },
    ],
  },
  {
    id: "spa",
    name: "Spa & Massage",
    services: [
      { name: "Thai Massage", description: "Traditional Thai body work" },
      { name: "Aroma Massage", description: "Aromatherapy relaxation" },
      { name: "Body Massage", description: "Full body stress relief" },
    ],
  },
  {
    id: "bridal",
    name: "Bridal",
    services: [
      { name: "Bridal Makeup", description: "Complete bridal transformation" },
      { name: "Groom Makeup", description: "Grooming for the big day" },
    ],
  },
];

export const homeServices = [
  { name: "Hair Styling", description: "Trending cuts & styles" },
  { name: "Beard Grooming", description: "Professional beard care" },
  { name: "Facial & D-Tan", description: "Skin rejuvenation" },
  { name: "Waxing & Threading", description: "Smooth & precise" },
  { name: "Massage Therapy", description: "Relaxation & wellness" },
  { name: "Bridal Makeup", description: "Your special day" },
];
