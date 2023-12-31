import { FeatureIconGrid } from "../../../components/atoms/Icons";

export type Feature = {
   /**
   * Description goes here
   */
  icon?: React.ReactNode;
   /**
   * Description goes here
   */
  title?: string;
   /**
   * Description goes here
   */
  paragraph?: string;
};

const SingleFeature = ({
  icon = <FeatureIconGrid />,
  title = "Crafted for Startups",
  paragraph = "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
}: Feature) => {
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
