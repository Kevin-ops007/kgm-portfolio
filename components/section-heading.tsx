import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 text-center text-3xl font-semibold capitalize tracking-[-0.04em] text-slate-900 dark:text-white">
      {children}
    </h2>
  );
}
