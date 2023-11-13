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
  disabled?: boolean;
  inputType?: "text" | "email" | "password" | "number" | "date" | "time";
};

const Input = ({
  label = "Label",
  showLabel = true,
  shadow = false,
  textArea = false,
  placeholderText,
  inputType = "text",
  disabled = false,
  ...props
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
            className={twMerge(input({ shadow }))}
            disabled={disabled}
            {...props}
          />
        ) : (
          <input placeholder={placeholderText} type={inputType} className={twMerge(input({ shadow }))} disabled={disabled} {...props} />
        )}
      </label>
    </div>
  );
};

export default Input;
