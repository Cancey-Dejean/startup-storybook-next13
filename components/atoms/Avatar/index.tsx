import Image from "next/image";

export type AvatarProps = {
  image: string;
  name: string;
  height?: number;
  width?: number;
};

const Avatar = ({ image, name, height = 50, width = 50 }: AvatarProps) => {
  return (
    <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
      <Image
        src={image}
        alt={name}
        width={width}
        height={height}
        className={`h-[${height}] w-[${width}] w-auto`}
      />
    </div>
  );
};

export default Avatar;
