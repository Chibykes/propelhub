import React from "react";

interface ProcedureProps {
  heading: string;
  subheading: string;
  children: React.ReactNode;
}

const Procedure = ({ heading, subheading, children }: ProcedureProps) => {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl border border-[#E6EAEF] bg-[#F9FAFB] h-[390px]">
      <div className="p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">{heading}</h1>
        <p className="text-base sm:text-lg text-gray-600">{subheading}</p>
      </div>

      <div className="relative flex-1 px-4 sm:px-6">{children}</div>
    </div>
  );
};

export default Procedure;
