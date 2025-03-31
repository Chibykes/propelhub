import Badge from "@/components/badge";
import FAQCard from "@/components/faq-card";
import { FREQUENTLY_ASKED_QUESTIONS } from "../constants/faqs";

const FAQs = () => {
  return (
    <section className="bg-secondary relative space-y-10 overflow-hidden px-6 py-16 sm:px-10 sm:py-24">
      <div
        className="mx-auto flex w-full max-w-7xl flex-col space-y-16 sm:space-y-24"
        data-aos="fade-zoom-in"
      >
        <div
          className="max-w-xl space-y-2 sm:max-w-3xl"
          data-aos="fade-zoom-in"
          data-aos-delay="200"
        >
          <Badge text="FAQs" />
          <h1
            className="text-3xl font-semibold text-white sm:text-5xl"
            data-aos="fade-zoom-in"
            data-aos-delay="400"
          >
            Got Questions?
            <br /> We’ve Got Answers!.
          </h1>
          <p
            className="mt-4 text-sm text-white sm:text-base"
            data-aos="fade-zoom-in"
            data-aos-delay="600"
          >
            Everything you want to know!
          </p>
        </div>

        <div
          className="flex flex-col space-y-6 sm:gap-8 sm:space-y-0"
          data-aos="fade-zoom-in"
          data-aos-delay="800"
        >
          {FREQUENTLY_ASKED_QUESTIONS.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay={`${200 + index * 100}`} // Stagger animations for each FAQ
            >
              <FAQCard {...faq} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
