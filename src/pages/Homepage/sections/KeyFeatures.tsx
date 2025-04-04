import Badge from "@/components/badge";
import FeatureSection from "@/components/feature-section";
import { Button } from "@/components/ui/button";
import { FEATURES } from "../constants/features";

const KeyFeatures = () => {
  return (
    <section>
      <section
        className="relative space-y-12 px-6 py-8 sm:space-y-24 sm:px-10 sm:py-10"
        data-aos="fade-zoom-in"
      >
        <div
          className="mx-auto flex w-full max-w-7xl flex-col space-y-8 sm:space-y-10"
          data-aos="fade-zoom-in"
          data-aos-delay="200"
        >
          <div
            className="mx-auto max-w-xl space-y-4 text-center sm:max-w-2xl sm:space-y-2"
            data-aos="fade-zoom-in"
            data-aos-delay="400"
          >
            <Badge
              text="Key Features"
              className="inline-flex rounded-lg border-neutral-200 bg-neutral-50 text-sm text-black/90"
            />
            <h1
              className="mt-4 text-3xl leading-[120%] font-semibold tracking-[-1px] text-gray-900 sm:mt-4 sm:text-5xl sm:leading-[100%] sm:tracking-[-3px]"
              data-aos="fade-zoom-in"
              data-aos-delay="600"
            >
              Unlock Powerful Tools <br className="hidden sm:block" /> Designed
              for Business Success
            </h1>
            <p
              className="mt-2 leading-[140%] tracking-[-0.5px] sm:mt-4 sm:tracking-[-1px]"
              data-aos="fade-zoom-in"
              data-aos-delay="800"
            >
              Explore our wide range of offerings designed to boost your growth.
            </p>

            <a
              href="#"
              className="mt-4 inline-block sm:mt-6"
              data-aos="fade-zoom-in"
              data-aos-delay="1000"
            >
              <Button
                className="cursor-pointer rounded-sm px-6 py-4 text-sm font-semibold text-white sm:px-8 sm:py-6 sm:text-base"
                variant={"default"}
              >
                Explore PropelHub’s Services
              </Button>
            </a>
          </div>
        </div>
      </section>

      {FEATURES.map((feature, index) => (
        <div
          key={index}
          data-aos="fade-zoom-in"
          data-aos-delay={`${200 + index * 100}`} // Stagger animations for each feature
        >
          <FeatureSection {...feature} />
        </div>
      ))}
    </section>
  );
};

export default KeyFeatures;
