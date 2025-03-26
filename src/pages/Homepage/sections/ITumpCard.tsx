import { Button } from "@/components/ui/button";

const ITumpCard = () => {
  return (
    <section className="relative space-y-24 bg-neutral-100 px-10 py-20">
      <div className="mx-auto flex w-full max-w-7xl items-center space-x-10">
        <div className="w-1/2 space-y-2 py-10">
          <h1 className="text-5xl font-semibold">
            Secure your Itump Black Business Card
          </h1>
          <p className="mt-4 text-gray-600">
            Track usage and optimize finance, spending and budgeting to stay
            attractive to investors, lenders and prospects.
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

        <img src={"/itump-card.png"} alt="" className="h-full w-1/2" />
      </div>
    </section>
  );
};

export default ITumpCard;
