import Badge from "@/components/badge";
import FAQCard from "@/components/faq-card";
import { FREQUENTLY_ASKED_QUESTIONS } from "../constants/faqs";

const FAQs = () => {
  return (
    <section className="bg-secondary relative space-y-10 overflow-hidden px-10 py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col space-y-24">
        <div className="max-w-3xl space-y-2">
          <Badge text="FAQs" />
          <h1 className="text-5xl font-semibold text-white">
            Got Questions?
            <br /> We’ve Got Answers!.
          </h1>
          <p className="mt-4 text-white">Everything you want to know!</p>
        </div>

        <div className="flex flex-col">
          {FREQUENTLY_ASKED_QUESTIONS.map((faq) => (
            <FAQCard {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
