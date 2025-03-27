import Badge from "@/components/badge";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "../constants/testimonials";
import TestimonialCard from "@/components/testimonial-card";

const SuccessStories = () => {
  return (
    <section className="bg-primary relative space-y-10 overflow-hidden py-24">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col space-x-0 lg:space-x-10">
          <div className="max-w-3xl space-y-2">
            <Badge text="Testimonials" />
            <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Real Success Stories from
              <br /> Entrepreneurs Like You
            </h1>
            <p className="mt-4 text-sm text-white sm:text-base">
              Join thousands of entrepreneurs who trust PropelHub!
            </p>

            <a href={"#"} className="mt-8 inline-block">
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

      <div className="scrollbar-none overflow-auto px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex w-fit flex-nowrap items-center space-x-4 pr-4 sm:space-x-6 sm:pr-6 lg:space-x-10 lg:pr-10">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
