import React from "react";

interface ProcedureProps {
  heading: string;
  subheading: string;
  children: React.ReactNode;
}

const Procedure = ({ heading, subheading, children }: ProcedureProps) => {
  return (
    <div className="relative flex h-[390px] flex-col overflow-hidden rounded-xl border border-[#E6EAEF] bg-[#F9FAFB]">
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-900">{heading}</h1>
        <p className="text-lg text-gray-600">{subheading}</p>
      </div>

      <div className="relative flex-1 px-6">{children}</div>
    </div>
  );
};

export default Procedure;
