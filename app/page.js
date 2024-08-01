import Feature from "./_components/feature/Feature";
import Hero from "./_components/hero/Hero";
import Offer from "./_components/offer/Offer";
import image from "@/public/Landing page picture.jpg";

export default function Page() {
  return (
    <>
      <Hero src={image} />
      <Feature>Where expertise meet empathy</Feature>
      <Offer />
    </>
  );
}
