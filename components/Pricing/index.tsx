"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Switch from "../molecules/Switch";
import CheckWithText from "../molecules/CheckWithText";
import {
  pricingBasicData,
  pricingLiteData,
  pricingPlusData,
} from "./pricingData";

type PricingProps = {
  showLeftImage?: boolean;
};

const Pricing = ({showLeftImage = true}: PricingProps) => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
        />

        <Switch
          isMonthly={isMonthly}
          setIsMonthly={setIsMonthly}
          switchOneText="Monthly"
          switchTwoText="Yearly"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            {pricingLiteData.map((item) => (
              <CheckWithText
                text={item.text}
                icon={item.status}
                accessCheck
                key={item.text}
              />
            ))}
          </PricingBox>

          <PricingBox
            packageName="Basic"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            {pricingBasicData.map((item) => (
              <CheckWithText
                text={item.text}
                icon={item.status}
                accessCheck
                key={item.text}
              />
            ))}
          </PricingBox>

          <PricingBox
            packageName="Plus"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            {pricingPlusData.map((item) => (
              <CheckWithText
                text={item.text}
                icon={item.status}
                accessCheck
                key={item.text}
              />
            ))}
          </PricingBox>
        </div>
      </div>

      {showLeftImage && (
        <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      )}
      
    </section>
  );
};

export default Pricing;
