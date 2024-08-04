import Feature from "./_components/feature/Feature";
import Hero from "./_components/hero/Hero";
import Offer from "./_components/offer/Offer";
import image from "@/public/Landing page picture.jpg";
import heroImage from "@/public/logoAC_colorblocknew.png";

export default function Page() {
  return (
    <>
      <Hero src={image} image={heroImage} />
      <Feature type="home">Where expertise meet empathy</Feature>
      <Offer />
    </>
  );
}
