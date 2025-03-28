import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Badge from "@/components/badge";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "../constants/testimonials";
import TestimonialCard from "@/components/testimonial-card";

const SuccessStories = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="bg-primary relative space-y-10 overflow-hidden py-24">
      <div className="px-4 sm:px-6 lg:px-10">
        <div
          className="mx-auto flex w-full max-w-7xl flex-col space-x-0 lg:space-x-10"
          data-aos="fade-up"
        >
          <div
            className="max-w-3xl space-y-2"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <Badge text="Testimonials" />
            <h1
              className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Real Success Stories from
              <br /> Entrepreneurs Like You
            </h1>
            <p
              className="mt-4 text-sm text-white sm:text-base"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              Join thousands of entrepreneurs who trust PropelHub!
            </p>

            <a
              href={"#"}
              className="mt-8 inline-block"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <Button
                className="cursor-pointer rounded-sm px-6 py-4 font-semibold text-white sm:px-8 sm:py-6"
                variant={"default"}
              >
                Get started
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div
        className="scrollbar-none overflow-auto px-4 sm:px-6 lg:px-10"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex w-fit flex-nowrap items-center space-x-4 pr-4 sm:space-x-6 sm:pr-6 lg:space-x-10 lg:pr-10">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${200 + index * 100}`} // Stagger animations for each testimonial
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
