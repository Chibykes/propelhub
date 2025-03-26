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
      <div className="space-y-4 px-8 py-10">
        <div className="flex justify-between gap-4">
          <h1 className="text-2xl font-medium text-white">{question}</h1>
          <button
            className="flex cursor-pointer items-start"
            onClick={() => setShowDescription(!showDescription)}
          >
            <X className={cn("h-8 w-8 text-white duration-200", rotate)} />
          </button>
        </div>

        <p
          className={cn(
            "overflow-hidden text-lg font-normal text-white duration-200",
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
