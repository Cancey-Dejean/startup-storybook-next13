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
  intent?: "display-one";

  /**
   * Description goes here
   */
  className?: string;
  /**
   * Description goes here
   */
  fontWeight?: "normal" | "semibold" | "bold";
  /**
   * Description goes here
   */
  children: React.ReactNode;
};

const heading = cva(" font-bold leading-tight text-black", {
  variants: {
    intent: {
      "display-one": ["text-3xl", "sm:text-4xl", "md:text-5xl"],
    },
    fontWeight: {
      normal: ["font-normal"],
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
