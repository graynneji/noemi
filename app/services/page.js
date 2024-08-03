import Hero from "../_components/hero/Hero";
import Services from "../_components/services/Services";
import Trapezium from "../_components/trapezium/Trapezium";
import leaveImage from "@/public/leaves the number to us.jpg";
const text = {
  head: "Leave the Numbers to us",
  sub: "Explore different service options",
};

export default function Page() {
  return (
    <>
      <Hero src={leaveImage} text={text} />

      <Trapezium />
      <Services />
    </>
  );
}
