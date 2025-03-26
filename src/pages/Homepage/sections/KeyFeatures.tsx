import Badge from "@/components/badge";
import FeatureSection from "@/components/feature-section";
import { Button } from "@/components/ui/button";
import { FEATURES } from "../constants/features";

const KeyFeatures = () => {
  return (
    <>
      <section className="relative space-y-24 px-10 py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col space-y-10">
          <div className="mx-auto max-w-2xl space-y-2 text-center">
            <Badge
              text="Key Features"
              className="inline-flex rounded-lg border-neutral-200 bg-neutral-50 text-sm text-black/90"
            />
            <h1 className="mt-4 text-5xl leading-[100%] font-semibold tracking-[-3px] text-gray-900">
              Unlock Powerful Tools <br /> Designed for Business Success
            </h1>
            <p className="mt-4 leading-[140%] tracking-[-1px]">
              Explore our wide range of offerings designed to boost your growth.
            </p>

            <a href="#" className="mt-6 inline-block">
              <Button
                className="cursor-pointer rounded-sm px-8 py-6 font-semibold text-white"
                variant={"default"}
              >
                Explore PropelHub’s Services
              </Button>
            </a>
          </div>
        </div>
      </section>

      {FEATURES.map((feature) => (
        <FeatureSection {...feature} />
      ))}
    </>
  );
};

export default KeyFeatures;
