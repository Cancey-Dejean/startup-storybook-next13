import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

const input = cva(
  "dark:bg-dark-btn w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color outline-none focus:border-primary focus-visible:shadow-none resize-none ",
  {
    variants: {
      shadow: {
        true: ["shadow-one"],
      },
    },
  },
);

type Props = {
  label: string;
  shadow?: boolean;
  showLabel?: boolean;
  textArea?: boolean;
};

const Input = ({
  label = "Label",
  showLabel = true,
  shadow = false,
  textArea = false,
}: Props) => {
  return (
    <div>
      {showLabel && (
        <label
          htmlFor="name"
          className="mb-3 block text-sm font-medium text-dark dark:text-white"
        >
          {label}
        </label>
      )}

      {textArea ? (
        <textarea
          name="message"
          rows={5}
          // placeholder="Enter your Message"
          // className="w-full resize-none rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
          className={twMerge(input({ shadow }))}
        ></textarea>
      ) : (
        <input type="text" className={twMerge(input({ shadow }))} />
      )}
    </div>
  );
};

export default Input;
