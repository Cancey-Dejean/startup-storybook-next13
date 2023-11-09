import { IconCheck } from "@/components/atoms/Icons";
import React from "react";

export type CheckWithTextProps = {
  text?: string;
  icon?: React.ReactNode;
};

const CheckWithText = ({ text, icon = <IconCheck /> }: CheckWithTextProps) => (
  <div className="flex items-center gap-4">
    <span className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {icon}
    </span>
    <p className="font-medium">{text}</p>
  </div>
);

export default CheckWithText;
