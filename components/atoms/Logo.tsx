import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type LogoProps = {
  imgSrc: string;
  className?: string;
  imgAlt: string;
};

const Logo = ({
  imgSrc = "/images/logo/logo.svg",
  className,
  imgAlt,
}: LogoProps) => {
  return (
    <Image
      src={imgSrc}
      alt={imgAlt}
      width={140}
      height={30}
      className={className}
    />
  );
};

export default Logo;
