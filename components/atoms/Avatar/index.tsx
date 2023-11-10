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
  size?: "small" | "medium";
  image: string;
  name: string;
  height?: number;
  width?: number;
};

const Avatar = ({
  image = "/images/blog/author-01.png",
  name,
  height = 50,
  width = 50,
  size,
}: AvatarProps) => {
  return (
    <div
      className={twMerge(
        "relative mr-4 w-full overflow-hidden rounded-full",
        avatar({ size }),
      )}
    >
      <Image
        src={image}
        alt={name}
        width={width}
        height={height}
        className={twMerge(avatar({ size }), `h-auto w-auto object-cover`)}
      />
    </div>
  );
};

export default Avatar;
