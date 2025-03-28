import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import Brands from "./sections/Brands";
import FAQs from "./sections/FAQs";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import ITumpCard from "./sections/ITumpCard";
import KeyFeatures from "./sections/KeyFeatures";
import SuccessStories from "./sections/SuccessStories";
import WhyChooseUs from "./sections/WhyChooseUs";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      once: true,
      anchorPlacement: "bottom-bottom",
      mirror: false,
    });

    window.addEventListener("resize", AOS.refresh);
    return () => window.removeEventListener("resize", AOS.refresh);
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Brands />
      <WhyChooseUs />
      <HowItWorks />
      <KeyFeatures />
      <ITumpCard />
      <SuccessStories />
      <FAQs />
      <Footer />
    </main>
  );
};

export default Homepage;
