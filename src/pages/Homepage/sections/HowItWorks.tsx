import Badge from "@/components/badge";
import Procedure from "@/components/procedure";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section className="relative space-y-24 px-10 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col space-y-10">
        <div className="max-w-2xl space-y-2">
          <Badge
            text="How It Works"
            className="inline-flex rounded-lg border-neutral-200 bg-neutral-50 text-sm text-black/90"
          />
          <h1 className="mt-4 text-5xl leading-[100%] font-semibold tracking-[-3px] text-gray-900">
            Your Path to Business Growth
            <br /> Made Simple
          </h1>
          <p className="mt-6 leading-[140%] tracking-[-1px]">
            Start your journey in these simple 5 steps
          </p>

          <a href="#" className="mt-6 inline-block">
            <Button
              className="cursor-pointer rounded-sm px-8 py-6 font-semibold text-white"
              variant={"default"}
            >
              Get started
            </Button>
          </a>
        </div>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-3 gap-8">
            <Procedure
              heading={"Create an Account"}
              subheading={"Sign up and complete your business profile"}
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
            >
              <img
                className="absolute top-0 left-6 h-full w-auto object-cover object-left-top"
                src="/procedures/procedure3.png"
                alt="Procedure"
              />
            </Procedure>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Procedure
              heading={"Track & Manage Applications"}
              subheading={"Get real-time updates."}
            >
              <img
                className="absolute bottom-0 mx-auto h-auto w-[calc(100%-3rem)] object-cover"
                src="/procedures/procedure4.png"
                alt="Procedure"
              />
            </Procedure>
            <Procedure
              heading={"Get Approved & Thrive!"}
              subheading={"Start leveraging PropelHub’s powerful network."}
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
