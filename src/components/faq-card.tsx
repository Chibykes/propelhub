import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";

interface FAQCardProps {
  question: string;
  answer: string;
}

const FAQCard = ({ question, answer }: FAQCardProps) => {
  const [showDescription, setShowDescription] = useState(false);
  const maxHeight = showDescription ? "max-h-full" : "max-h-0";
  const rotate = showDescription ? "rotate-0" : "rotate-45";

  return (
    <div className="w-full">
      <div className="space-y-4 px-4 py-6 sm:px-8 sm:py-10">
        <div className="flex justify-between gap-2 sm:gap-4">
          <h1 className="text-lg font-medium text-white sm:text-2xl">
            {question}
          </h1>
          <button
            className="flex cursor-pointer items-start"
            onClick={() => setShowDescription(!showDescription)}
          >
            <X
              className={cn(
                "h-6 w-6 text-white duration-200 sm:h-8 sm:w-8",
                rotate,
              )}
            />
          </button>
        </div>

        <p
          className={cn(
            "overflow-hidden text-base font-normal text-white duration-200 sm:text-lg",
            maxHeight,
          )}
          style={{ maxHeight: showDescription ? "100px" : "0px" }}
        >
          {answer}
        </p>
      </div>

      <div className="my-4 h-px w-full bg-white/10"></div>
    </div>
  );
};

export default FAQCard;
