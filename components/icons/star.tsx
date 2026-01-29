import React from "react";

const StarIcon = ({
  className,
  width = 28,
  height = 27,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7903 0L17.0457 10.0193L27.5806 10.0193L19.0577 16.2115L22.3132 26.2307L13.7903 20.0385L5.2674 26.2307L8.52285 16.2115L-3.62396e-05 10.0193L10.5348 10.0193L13.7903 0Z"
        fill="#F9BA2D"
      />
    </svg>
  );
};

export default StarIcon;
