type SwitchProps = {
   /**
   * Description goes here
   */
  isMonthly: boolean;
   /**
   * Description goes here
   */
  setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>;
   /**
   * Description goes here
   */
  switchOneText: string;
   /**
   * Description goes here
   */
  switchTwoText: string;
};

const Switch = ({
  switchOneText = "Monthly", 
  switchTwoText = "Yearly",
  isMonthly,
  setIsMonthly,
}: SwitchProps) => {
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
        data-wow-delay=".1s"
      >
        <span
          onClick={() => setIsMonthly(true)}
          className={`${
            isMonthly
              ? "pointer-events-none text-primary"
              : "text-dark dark:text-white"
          } mr-4 cursor-pointer text-base font-semibold`}
        >
          {switchOneText}
        </span>

        <div
          onClick={() => setIsMonthly(!isMonthly)}
          className="flex cursor-pointer items-center"
        >
          <div className="relative">
            <div className="h-5 w-14 rounded-full bg-dark shadow-inner"></div>
            <div
              className={`${
                isMonthly ? "" : "translate-x-full"
              } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
            >
              <span className="active h-4 w-4 rounded-full bg-white"></span>
            </div>
          </div>
        </div>

        <span
          onClick={() => setIsMonthly(false)}
          className={`${
            isMonthly
              ? "text-dark dark:text-white"
              : "pointer-events-none text-primary"
          } ml-4 cursor-pointer text-base font-semibold`}
        >
          {switchTwoText}
        </span>
      </div>
    </div>
  );
};

export default Switch;
