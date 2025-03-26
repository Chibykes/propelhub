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
  return (
    <main>
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
