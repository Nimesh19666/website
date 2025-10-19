import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Nuopod team. Feel free to mail us for any enquiries about our AI and development services.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
    </>
  );
}
