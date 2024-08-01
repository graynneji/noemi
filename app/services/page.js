import Hero from "../_components/hero/Hero";
import Services from "../_components/services/Services";
import Trapezium from "../_components/trapezium/Trapezium";
import leaveImage from "@/public/leaves the number to us.jpg";
export default function Page() {
  return (
    <>
      <Hero src={leaveImage} />

      <Trapezium />
      <Services />
    </>
  );
}
