import { Button } from "./ui/button";

interface FeatureSectionProps {
  bgColor: string;
  heading: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

const FeatureSection = ({
  bgColor,
  heading,
  description,
  image,
  ctaText,
  ctaLink,
}: FeatureSectionProps) => {
  return (
    <section className="relative space-y-24 px-6 py-10">
      <div
        className="mx-auto flex w-full max-w-7xl flex-col items-center space-y-10 rounded-lg bg-blue-100 md:flex-row md:space-y-0 md:space-x-10"
        style={{ backgroundColor: bgColor }}
      >
        <div className="w-full space-y-4 px-6 py-6 text-center md:w-1/2 md:px-10 md:py-10 md:text-left">
          <h1 className="text-2xl font-medium md:text-4xl">{heading}</h1>
          <p className="text-sm md:text-base">{description}</p>

          <a href={ctaLink} className="mt-6 inline-block">
            <Button
              className="cursor-pointer rounded-sm px-6 py-4 font-semibold text-white md:px-8 md:py-6"
              variant={"default"}
            >
              {ctaText}
            </Button>
          </a>
        </div>

        <img
          src={image}
          alt=""
          className="h-auto w-full rounded-lg md:h-full md:w-1/2"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
