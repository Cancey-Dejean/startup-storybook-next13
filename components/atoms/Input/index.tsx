import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

const input = cva(
  "dark:bg-dark-btn w-full rounded-md border border-body-color  border-opacity-10 px-6 py-3 text-base text-body-color placeholder-body-color outline-none focus:border-primary focus-visible:shadow-none resize-none ",
  {
    variants: {
      shadow: {
        true: ["shadow-one border-transparent dark:shadow-signUp"],
      },
    },
  },
);

type InputProps = {
  label: string;
  shadow?: boolean;
  showLabel?: boolean;
  textArea?: boolean;
  placeholderText?: string;
};

const Input = ({
  label = "Label",
  showLabel = true,
  shadow = false,
  textArea = false,
  placeholderText,
}: InputProps) => {
  return (
    <div>
      <label
        htmlFor="name"
        className={twMerge(" text-sm font-medium text-dark dark:text-white")}
      >
        <span className={twMerge(showLabel ? "mb-3 block" : "sr-only")}>
          {label}
        </span>

        {textArea ? (
          <textarea
            name="message"
            rows={5}
            placeholder={placeholderText}
            // className="w-full resize-none rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
            className={twMerge(input({ shadow }))}
          ></textarea>
        ) : (
          <input placeholder={placeholderText} type="text" className={twMerge(input({ shadow }))} />
        )}
      </label>
    </div>
  );
};

export default Input;
