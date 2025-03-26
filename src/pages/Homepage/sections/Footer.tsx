import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative space-y-10 overflow-hidden bg-white px-10 py-10">
      <div className="divide mx-auto flex w-full max-w-7xl flex-col divide-y divide-gray-200">
        {/* Subscribe */}
        <div className="flex justify-between gap-4 py-10">
          <div className="w-full max-w-sm space-y-2">
            <h1 className="text-2xl font-bold">Join our newsletter</h1>
            <p className="">
              Get all the latest PropelHub news
              <br /> delivered to your inbox.
            </p>
          </div>

          <div className="flex w-full max-w-md items-start space-x-2">
            <Input
              type="email"
              className="py-6 shadow-none"
              placeholder="Email address"
            />
            <Button
              type="submit"
              className="px-6 py-6 text-white"
              variant={"default"}
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* About */}
        <div className="py-10">
          <p className="text-base text-gray-700">
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
            are key to success.The future of your business starts today—Take the
            next step with PropelHub!
          </p>
        </div>

        <div className="py-10">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between gap-4">
              <div className="flex flex-col gap-4">
                <div className="">
                  <img
                    src="/logo.png"
                    alt="Propelhub"
                    className="h-10 w-auto"
                  />
                </div>
                <p className="">© 2025 PropelHub. All rights reserved.</p>
                <div className="">
                  <p className="">30 wall Str, 8Th FL </p>
                  <p className="">New York, NY 10005 </p>
                  <p className="">39 Uyo Str. Off Stadium RD. </p>
                  <p className="">Portharcourt, Rivers 500101, NIG</p>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  className="bg-primary-button grid h-10 w-10 place-content-center rounded-full"
                  href=""
                >
                  <FaFacebook className="h-5 w-5 text-white" />
                </a>
                <a
                  className="bg-primary-button grid h-10 w-10 place-content-center rounded-full"
                  href=""
                >
                  <FaTwitter className="h-5 w-5 text-white" />
                </a>
                <a
                  className="bg-primary-button grid h-10 w-10 place-content-center rounded-full"
                  href=""
                >
                  <FaInstagram className="h-5 w-5 text-white" />
                </a>
                <a
                  className="bg-primary-button grid h-10 w-10 place-content-center rounded-full"
                  href=""
                >
                  <FaLinkedinIn className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
            <div className="flex w-full gap-8">
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
