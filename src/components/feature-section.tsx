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
    <section className="relative space-y-24 px-10 py-10">
      <div
        className="mx-auto flex w-full max-w-7xl items-center space-x-10 rounded-lg bg-blue-100"
        style={{ backgroundColor: bgColor }}
      >
        <div className="w-1/2 space-y-2 px-10 py-10">
          <h1 className="text-4xl font-medium">{heading}</h1>
          <p className="">{description}</p>

          <a href={ctaLink} className="mt-8 inline-block">
            <Button
              className="cursor-pointer rounded-sm px-8 py-6 font-semibold text-white"
              variant={"default"}
            >
              {ctaText}
            </Button>
          </a>
        </div>

        <img src={image} alt="" className="h-full w-1/2" />
      </div>
    </section>
  );
};

export default FeatureSection;
