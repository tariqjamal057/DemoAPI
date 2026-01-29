import GoogleIcon from "@/components/icons/google";
import StarIcon from "@/components/icons/star";
import React from "react";

const AdminFooter = () => {
  return (
    <footer className="flex flex-col-reverse md:flex-row justify-between items-center bg-gray-50 px-6 py-8 md:px-8 md:py-6 gap-4">
      <div className="flex flex-col justify-start items-start gap-y-2 md:max-w-[70%] text-xs md:text-base text-gray-500">
        <p>
          Copyright © 2025 Autobon. All rights reserved. Autobon® and the
          Autobon Logo design are registered trademarks of Autobon Ltd.
          <br />
          Other trademarks are the property of their respective owners.
        </p>
        <p>
          Privacy Policy | Legal Agreements | Website Terms of Use | Canada
          Drives Corporate
        </p>
      </div>
      <div className="flex justify-between items-center gap-x-4">
        <GoogleIcon
          height={40}
          width={40}
          className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"
        />
        <div className="flex flex-col justify-start">
          <div className="flex items-center gap-x-2">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className="w-[19px]  md:w-[28px] md:h-[27px]"
              />
            ))}
          </div>
          <p className="text-xs md:text-base text-gray-500">
            Over 2500 5 Star Reviews
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
