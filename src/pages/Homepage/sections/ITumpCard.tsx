import { Button } from "@/components/ui/button";

const ITumpCard = () => {
  return (
    <section className="relative space-y-24 bg-neutral-100 px-6 py-16 sm:px-10 sm:py-20">
      <div
        className="mx-auto flex w-full max-w-7xl flex-col items-center space-y-10 sm:flex-row sm:space-y-0 sm:space-x-10"
        data-aos="fade-zoom-in"
      >
        <div
          className="w-full space-y-4 py-6 sm:w-1/2 sm:py-10"
          data-aos="fade-zoom-in"
          data-aos-delay="200"
        >
          <h1 className="text-3xl font-semibold sm:text-5xl">
            Secure your Itump Black Business Card
          </h1>
          <p className="mt-4 text-gray-600">
            Track usage and optimize finance, spending and budgeting to stay
            attractive to investors, lenders and prospects.
          </p>

          <a href={"#"} className="mt-6 inline-block sm:mt-8">
            <Button
              className="cursor-pointer rounded-sm px-6 py-4 font-semibold text-white sm:px-8 sm:py-6"
              variant={"default"}
            >
              Get started
            </Button>
          </a>
        </div>

        <img
          src={"/itump-card.png"}
          alt=""
          className="h-auto w-full sm:h-full sm:w-1/2"
          data-aos="fade-zoom-in"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};

export default ITumpCard;
