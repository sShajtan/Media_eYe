import React from "react";

export default function TelegramBoxIcon() {
  return (
    <svg
      height="auto"
      width="167"
      height="167"
      viewBox="0 0 167 167"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f)">
        <path
          className="bg"
          d="M42.7209 1.86739e-06L-1.99876e-06 45.7262L-7.2998e-06 167L126.221 167L167 127.238L167 7.2998e-06L42.7209 1.86739e-06Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M166.5 0.500007L42.9381 0.500002L0.499998 45.9234L0.499993 166.5L126.018 166.5L166.5 127.027L166.5 0.500007Z"
          stroke="#8F8F8F"
        />
      </g>
      <path
        d="M84 50.0938C65.2177 50.0938 50 65.2695 50 84C50 102.73 65.2177 117.906 84 117.906C102.782 117.906 118 102.73 118 84C118 65.2695 102.782 50.0938 84 50.0938ZM100.698 73.3223L95.1185 99.5449C94.7073 101.404 93.5968 101.855 92.0476 100.98L83.5476 94.7324L79.4484 98.6699C78.996 99.1211 78.6121 99.5039 77.7347 99.5039L78.3379 90.877L94.0903 76.6855C94.7758 76.084 93.9395 75.7422 93.0347 76.3438L73.5669 88.5664L65.1766 85.9551C63.3532 85.3809 63.3121 84.1367 65.5605 83.2617L98.3403 70.6562C99.8621 70.1094 101.192 71.0254 100.698 73.3223Z"
        fill="white"
        className="main_soc"
      />
      <rect x="60" y="143" width="48" height="4" fill="#111022" />
      <defs>
        <filter
          id="filter0_f"
          x="-5"
          y="-5"
          width="177"
          height="177"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floadopacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="2.5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="-3.6499e-06"
          y1="83.5"
          x2="167"
          y2="83.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5419E3" />
          <stop offset="1" stopColor="#39CCFC" />
        </linearGradient>
      </defs>
    </svg>
  );
}
