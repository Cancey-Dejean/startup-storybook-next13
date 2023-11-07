import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export type TextProps = {
  /**
   * Description goes here
   */
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  /**
   * Description goes here
   */
  intent?:
    | "display-one"
    | "display-two"
    | "heading-one"
    | "heading-two"
    | "body-large"
    | "body"
    | "label"
    | "caption";
  /**
   * Description goes here
   */
  className?: string;
  /**
   * Description goes here
   */
  fontWeight?: "normal" | "medium" | "semibold" | "bold";
  /**
   * Description goes here
   */
  children: React.ReactNode;
};

const heading = cva("", {
  variants: {
    intent: {
      "display-one": [
        "text-3xl leading-tight",
        "sm:text-4xl sm:leading-tight",
        "md:text-5xl md:leading-tight",
      ],
      "display-two": [
        "text-2xl",
        "sm:text-4xl",
        "lg:text-[44px] lg:leading-[56px]",
      ],
      "heading-one": ["text-2xl", "sm:text-3xl"],
      "heading-two": ["text-xl", "sm:text-2xl"],
      "body-large": [
        "text-base dark:text-white dark:opacity-90 ",
        "sm:text-lg md:text-xl sm:text-[20px] leading-[30px]",
      ],
      body: ["text-base"],
      label: ["text-sm"],
      caption: ["text-xs"],
    },
    fontWeight: {
      normal: ["font-normal"],
      medium: ["font-medium"],
      semibold: ["font-semibold"],
      bold: ["font-bold"],
    },
  },
});

/**
 * Primary UI component for user interaction
 */
const Text = ({
  intent = "display-one",
  as = "h1",
  children = "Heading goes here",
  className = "",
  fontWeight = "normal",
}: TextProps) => {
  const Element = as;
  return (
    <Element className={twMerge(heading({ intent, className, fontWeight }))}>
      {children}
    </Element>
  );
};

export default Text;
