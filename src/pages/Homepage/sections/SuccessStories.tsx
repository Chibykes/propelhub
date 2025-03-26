import Badge from "@/components/badge";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "../constants/testimonials";
import TestimonialCard from "@/components/testimonial-card";

const SuccessStories = () => {
  return (
    <section className="bg-primary relative space-y-10 overflow-hidden py-24">
      <div className="px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col space-x-10">
          <div className="max-w-3xl space-y-2">
            <Badge text="Testimonials" />
            <h1 className="text-5xl font-semibold text-white">
              Real Success Stories from
              <br /> Entrepreneurs Like You
            </h1>
            <p className="mt-4 text-white">
              Join thousands of entrepreneurs who trust PropelHub!
            </p>

            <a href={"#"} className="mt-8 inline-block">
              <Button
                className="cursor-pointer rounded-sm px-8 py-6 font-semibold text-white"
                variant={"default"}
              >
                Get started
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="overflow-auto px-10 scrollbar-none">
        <div className="mx-auto max-w-7xl">
          <div className="flex w-fit flex-nowrap items-center space-x-10 pr-10">
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
