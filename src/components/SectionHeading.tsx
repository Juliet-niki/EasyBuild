import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = "center",
  light = false,
}) => {
  return (
    <div
      className={`mb-8 md:mb-12 ${
        alignment === "center" ? "text-center" : "text-left"
      }`}
    >
      <h2
        className={`text-[clamp(28px,3vw,36px)] font-bold tracking-tight mb-2 md:mb-4 ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-[clamp(14px,1.8vw,18px)] max-w-2xl mx-auto ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1.5 w-20 bg-primary-600 rounded-full ${
          alignment === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
};

export default SectionHeading;
