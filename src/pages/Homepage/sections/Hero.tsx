import Badge from "@/components/badge";
import { Navbar } from "@/components/navbar";

const Hero = () => {
  return (
    <section className="before:bg-primary relative space-y-24 px-4 py-6 pb-12 before:absolute before:inset-0 before:z-[-1] before:h-3/4 before:content-[''] sm:px-10">
      <Navbar />

      <div className="flex h-full flex-col items-center justify-center gap-4 px-4 text-center sm:px-0">
        <Badge text="Empowering Businesses, Enabling Growth" />
        <h1 className="max-w-7xl text-3xl font-bold text-white sm:text-6xl">
          Your All-In-One Gateway to Business Growth,
          <br className="hidden sm:block" /> Funding & Mentorship
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-white sm:text-lg">
          Get access to business loans, expert mentorship, investment
          opportunities, and premium financial services—all in one place.
          PropelHub empowers entrepreneurs to scale faster with tailored
          solutions.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center space-x-4">
          <a
            href="#"
            className="border-primary hover:bg-primary bg-primary-button rounded-lg border px-4 py-2 text-sm text-white duration-200 hover:text-white sm:px-6 sm:py-3 sm:text-base"
          >
            Get Started
          </a>
        </div>
      </div>

      <figure className="bg-secondary mx-auto w-full max-w-full rounded-xl p-4 sm:max-w-5xl sm:p-8">
        <img src="/hero.png" alt="Hero" className="w-full" />
      </figure>
    </section>
  );
};

export default Hero;
