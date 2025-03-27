import Badge from "@/components/badge";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  return (
    <section className="relative space-y-24 px-4 py-4 sm:px-10 sm:py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between space-y-10 lg:flex-row">
        <div className="w-full max-w-2xl space-y-8">
          <div className="space-y-2">
            <Badge
              text="Why Choose Us"
              className="inline-flex rounded-lg border-neutral-200 bg-neutral-50 text-sm text-black/90"
            />
            <h1 className="mt-4 text-3xl leading-[120%] font-semibold tracking-[-1px] text-gray-900 sm:text-5xl sm:leading-[100%] sm:tracking-[-3px]">
              The All-in-One Business
              <br /> Growth & Financial Support
              <br /> Platform
            </h1>
          </div>

          <div className="tracking[-1px] leading-[140%]">
            <p className="">
              We believe that every entrepreneur deserves the right resources,
              funding, and expertise to succeed. PropelHub makes this possible
              by connecting you to:
            </p>

            <ul className="mt-4 ml-2 list-inside list-disc space-y-4 marker:text-xl marker:leading-[125%]">
              <li className="m-0">
                Fast & Flexible Business Loans – Access financing from ₦500K to
                ₦300M+
              </li>
              <li className="m-0">
                Expert Mentorship – Gain insights from top industry leaders
              </li>
              <li className="m-0">
                Investment & Grant Access – Secure funding tailored to your
                business
              </li>
              <li className="m-0">
                Business Expansion Tools – Enter new markets with confidence
              </li>
              <li className="m-0">
                Essential Business Services – Registration, tax compliance, and
                more
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#">
              <Button
                className="cursor-pointer rounded-sm px-6 py-4 font-semibold text-white sm:px-8 sm:py-6"
                variant={"default"}
              >
                Explore PropelHub
              </Button>
            </a>
            <a href="#">
              <Button
                className="text-primary cursor-pointer rounded-sm px-6 py-4 font-semibold sm:px-8 sm:py-6"
                variant={"ghost"}
              >
                Learn More
              </Button>
            </a>
          </div>
        </div>
        <div className="w-full max-w-xl">
          <img
            src="/why-choose-us.png"
            alt="Why Choose Us"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
