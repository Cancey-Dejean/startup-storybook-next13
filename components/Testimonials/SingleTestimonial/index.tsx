import Avatar, { AvatarProps } from "../../../components/atoms/Avatar";
import { IconStar } from "../../../components/atoms/Icons";

export type Testimonial = {
  id?: number;
  name: AvatarProps["name"];
  designation: string;
  content: string;
  image: AvatarProps["imgSrc"];
  star?: number;
};

const SingleTestimonial = ({
  name = "John Doe",
  image = "/images/avatars/avatar-1.png",
  content,
  designation,
  star = 5,
}: Testimonial) => {
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-dark lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="mb-5 flex items-center space-x-1">
          {Array(Math.min(Math.max(star, 1), 5))
            .fill(1)
            .map((_, index) => (
              <span key={index} className="text-yellow">
                <IconStar />
              </span>
            ))}
        </div>

        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          “{content}
        </p>
        <div className="flex items-center">
          <Avatar imgSrc={image} name={name} />

          <div className="w-full">
            <h5 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h5>
            <p className="text-sm text-body-color">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
