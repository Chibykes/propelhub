import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BsBuildingsFill } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative space-y-10 overflow-hidden bg-white px-6 py-10 md:px-10">
      <div
        className="divide mx-auto flex w-full max-w-7xl flex-col divide-y divide-gray-200"
        data-aos="fade-up"
      >
        {/* Subscribe */}
        <div
          className="flex flex-col gap-4 py-10 md:flex-row md:justify-between"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="w-full space-y-2 md:max-w-sm">
            <h1 className="text-xl font-bold md:text-2xl">
              Join our newsletter
            </h1>
            <p className="text-sm md:text-base">
              Get all the latest PropelHub news
              <br /> delivered to your inbox.
            </p>
          </div>

          <div
            className="flex w-full flex-col items-start space-y-2 md:max-w-md md:flex-row md:items-center md:space-y-0 md:space-x-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Input
              type="email"
              className="py-4 shadow-none md:py-6"
              placeholder="Email address"
            />
            <Button
              type="submit"
              className="w-full px-6 py-4 text-white md:w-auto md:py-6"
              variant={"default"}
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* About */}
        <div className="py-10" data-aos="fade-up" data-aos-delay="600">
          <p className="text-sm text-gray-700 md:text-base">
            PropelHub is a business growth and financial solutions platform that
            connects users to financial institutions, mentors, and investors. We
            do not directly issue loans, grants, or investments but facilitate
            access to these opportunities through our trusted network of
            partners. Approval for loans, investments, or funding is subject to
            eligibility, documentation, and approval by the respective financial
            institutions or investors. PropelHub does not guarantee funding
            approvals and strongly advises users to review all terms,
            conditions, and interest rates before committing to any financial
            agreements.
            <br /> <br />
            Stay Focused, Stay Growing!
            <br />
            Every great business starts with a bold step. PropelHub is here to
            guide, support, and connect you with the opportunities you need to
            thrive in today’s competitive market. Whether you’re applying for
            funding, refining your strategy, or expanding into new markets,
            remember that persistence, knowledge, and the right support system
            are key to success. The future of your business starts today—Take
            the next step with PropelHub!
          </p>
        </div>

        <div className="py-10" data-aos="fade-up" data-aos-delay="800">
          <div className="flex flex-col gap-8">
            <div
              className="flex flex-col gap-4 md:flex-row md:justify-between"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <div className="flex flex-col gap-4">
                <div className="">
                  <img
                    src="/logo.png"
                    alt="Propelhub"
                    className="h-8 w-auto md:h-10"
                  />
                </div>
                <p className="text-sm md:text-base">
                  © 2025 PropelHub. All rights reserved.
                </p>
                <div className="text-sm md:text-base">
                  <div className="flex items-start gap-2">
                    <BsBuildingsFill className="text-primary-button mt-[5px]" />

                    <div className="">
                      <p className="">30 wall Str, 8Th FL </p>
                      <p className="">New York, NY 10005 </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaMapMarkerAlt className="text-primary-button mt-[5px]" />

                    <div className="">
                      <p className="">39 Uyo Str. Off Stadium RD. </p>
                      <p className="">Portharcourt, Rivers 500101, NIG</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  className="bg-primary-button grid h-8 w-8 place-content-center rounded-full md:h-10 md:w-10"
                  href=""
                  data-aos="fade-up"
                  data-aos-delay="1200"
                >
                  <FaFacebook className="h-4 w-4 text-white md:h-5 md:w-5" />
                </a>
                <a
                  className="bg-primary-button grid h-8 w-8 place-content-center rounded-full md:h-10 md:w-10"
                  href=""
                  data-aos="fade-up"
                  data-aos-delay="1400"
                >
                  <FaTwitter className="h-4 w-4 text-white md:h-5 md:w-5" />
                </a>
                <a
                  className="bg-primary-button grid h-8 w-8 place-content-center rounded-full md:h-10 md:w-10"
                  href=""
                  data-aos="fade-up"
                  data-aos-delay="1600"
                >
                  <FaInstagram className="h-4 w-4 text-white md:h-5 md:w-5" />
                </a>
                <a
                  className="bg-primary-button grid h-8 w-8 place-content-center rounded-full md:h-10 md:w-10"
                  href=""
                  data-aos="fade-up"
                  data-aos-delay="1800"
                >
                  <FaLinkedinIn className="h-4 w-4 text-white md:h-5 md:w-5" />
                </a>
              </div>
            </div>
            <div
              className="flex flex-col gap-4 md:flex-row md:gap-8"
              data-aos="fade-up"
              data-aos-delay="2000"
              data-aos-anchor-placement="top-bottom"
            >
              <a href="" className="text-sm font-medium text-gray-600">
                Terms of Service
              </a>
              <a href="" className="text-sm font-medium text-gray-600">
                Privacy Policy
              </a>
              <a href="" className="text-sm font-medium text-gray-600">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
