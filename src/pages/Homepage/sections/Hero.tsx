import Badge from "@/components/badge";


const HERO_NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Why Choose Us", href: "#" },
  { name: "How It Works", href: "#" },
  { name: "Features", href: "#" },
  { name: "FAQs", href: "#" },
];

const Hero = () => {
  return (
    <section className="before:bg-primary relative space-y-24 px-10 py-6 pb-12 before:absolute before:inset-0 before:z-[-1] before:h-3/4 before:content-['']">
      <nav className="flex w-full items-center justify-between rounded-xl bg-white px-10 py-6">
        <img src="/logo.png" alt="Propelhub" className="h-8" />
        <div className="flex items-center space-x-8">
          {HERO_NAV_LINKS.map((link) => (
            <a href={link.href} className="text-gray-900">
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-primary">
            Login
          </a>
          <a
            href="#"
            className="text-primary border-primary hover:bg-primary rounded-sm border bg-transparent px-4 py-2 duration-200 hover:text-white"
          >
            Sign Up
          </a>
        </div>
      </nav>

      <div className="flex h-full flex-col items-center justify-center gap-4">
        <Badge text="Empowering Businesses, Enabling Growth" />
        <h1 className="max-w-7xl text-center text-6xl font-bold text-white">
          Your All-In-One Gateway to Business Growth,
          <br /> Funding & Mentorship
        </h1>
        <p className="mt-4 max-w-3xl text-center text-lg text-white">
          Get access to business loans, expert mentorship, investment
          opportunities, and premium financial services—all in one place.
          PropelHub empowers entrepreneurs to scale faster with tailored
          solutions.
        </p>
        <div className="mt-8 flex items-center space-x-4">
          <a
            href="#"
            className="border-primary hover:bg-primary bg-primary-button rounded-lg border px-6 py-3 text-white duration-200 hover:text-white"
          >
            Get Started
          </a>
        </div>
      </div>

      <figure className="bg-secondary mx-auto w-full max-w-5xl rounded-xl p-8">
        <img src="/hero.png" alt="Hero" className="w-full" />
      </figure>
    </section>
  );
};

export default Hero;
