import Image from "next/image";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const avatar = cva(
  "rounded-md text-base flex items-center justify-center gap-2 duration-300 ease-in-out",
  {
    variants: {
      size: {
        small: "h-[40px] max-w-[40px]",
        medium: "h-[50px] max-w-[50px]",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

export type AvatarProps = {
  /**
   * Description goes here
   */
  size?: "small" | "medium";
  /**
   * Description goes here
   */
  imgSrc: string;
  /**
   * Description goes here
   */
  name: string;
};

const Avatar = ({
  imgSrc = "/images/testimonials/author-02.png",
  name = "Name",
  size,
}: AvatarProps) => {
  return (
    <div
      className={twMerge(
        "relative w-full overflow-hidden rounded-full",
        avatar({ size }),
      )}
    >
      <Image
        src={imgSrc}
        alt={name}
        width={50}
        height={50}
        className={twMerge(avatar({ size }), `h-auto w-auto object-cover`)}
      />
    </div>
  );
};

export default Avatar;
