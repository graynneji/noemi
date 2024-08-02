import ContactForm from "../_components/contactForm/ContactForm";
import Hero from "../_components/hero/Hero";
import contact from "@/public/Contact us.jpg";

export default function Page() {
  return (
    <>
      <Hero src={contact} />
      <ContactForm />
    </>
  );
}
