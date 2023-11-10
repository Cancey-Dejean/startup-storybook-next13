import { twMerge } from "tailwind-merge";
import { IconCheck } from "../../atoms/Icons";
import React from "react";

export type CheckWithTextProps = {
  text?: string;
  icon?: React.ReactNode;
  accessCheck?: boolean;
};

const CheckWithText = ({
  text,
  icon = <IconCheck />,
  accessCheck,
}: CheckWithTextProps) => (
  <div className="flex items-center gap-4">
    <span
      className={twMerge(
        "flex  items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary",
        accessCheck ? "h-[18px] w-[18px] rounded-full" : "h-[30px] w-[30px]",
      )}
    >
      {icon}
    </span>
    <p className="font-medium">{text}</p>
  </div>
);

export default CheckWithText;
