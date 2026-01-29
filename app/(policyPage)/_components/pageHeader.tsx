import React from "react";

const PageHeader = ({ header, info }: { header: string; info: string }) => {
  return (
    <div>
      <h2 className="font-semibold text-lg md:text-2xl">{header}</h2>
      <div className="border my-1.5"></div>
      <p className="font-light text-gray-500 text-sm">{info}</p>
    </div>
  );
};

export default PageHeader;
