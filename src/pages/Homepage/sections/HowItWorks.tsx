import Badge from "@/components/badge";
import Procedure from "@/components/procedure";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section className="relative space-y-24 px-6 py-10 sm:px-10">
      <div
        className="mx-auto flex w-full max-w-7xl flex-col space-y-10"
        data-aos="fade-up"
      >
        <div
          className="max-w-2xl space-y-2"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <Badge
            text="How It Works"
            className="inline-flex rounded-lg border-neutral-200 bg-neutral-50 text-sm text-black/90"
          />
          <h1 className="mt-4 text-3xl leading-[120%] font-semibold tracking-[-1px] text-gray-900 sm:text-5xl sm:leading-[100%] sm:tracking-[-3px]">
            Your Path to Business Growth
            <br className="hidden sm:block" /> Made Simple
          </h1>
          <p
            className="mt-4 leading-[140%] tracking-[-0.5px] sm:mt-6 sm:tracking-[-1px]"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Start your journey in these simple 5 steps
          </p>

          <a
            href="#"
            className="mt-4 inline-block sm:mt-6"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <Button
              className="cursor-pointer rounded-sm px-6 py-4 font-semibold text-white sm:px-8 sm:py-6"
              variant={"default"}
            >
              Get started
            </Button>
          </a>
        </div>

        <div
          className="flex flex-col gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <Procedure
              heading={"Create an Account"}
              subheading={"Sign up and complete your business profile"}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                className="absolute top-0 left-2 h-full w-full object-cover"
                src="/procedures/procedure1.png"
                alt="Procedure"
              />
            </Procedure>
            <Procedure
              heading={"Apply for Services"}
              subheading={"Choose from loans, mentorship, funding, and more."}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img
                className="absolute top-0 left-6 h-full w-auto object-cover object-left-top"
                src="/procedures/procedure2.png"
                alt="Procedure"
              />
            </Procedure>
            <Procedure
              heading={"Submit Required Documents!"}
              subheading={"Securely upload necessary details."}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img
                className="absolute top-0 left-6 h-full w-auto object-cover object-left-top"
                src="/procedures/procedure3.png"
                alt="Procedure"
              />
            </Procedure>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Procedure
              heading={"Track & Manage Applications"}
              subheading={"Get real-time updates."}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <img
                className="absolute bottom-0 mx-auto h-auto w-[calc(100%-1.5rem)] object-cover sm:w-[calc(100%-3rem)]"
                src="/procedures/procedure4.png"
                alt="Procedure"
              />
            </Procedure>
            <Procedure
              heading={"Get Approved & Thrive!"}
              subheading={"Start leveraging PropelHub’s powerful network."}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <img
                className="absolute top-0 left-6 h-full w-auto object-cover object-left-top"
                src="/procedures/procedure5.png"
                alt="Procedure"
              />
            </Procedure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
