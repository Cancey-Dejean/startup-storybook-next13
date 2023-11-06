import { cva } from "class-variance-authority";
import classNames from "classnames";

export type TextProps = {
  /**
   * Description goes here
   */
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  /**
   * Description goes here
   */
  intent?: "normal" | "semibold" | "bold";
  /**
   * Description goes here
   */
  className?: string;
  /**
   * Description goes here
   */
  size?: "display-one" | "display-two" | "heading-one" | "heading-two" | "body";
  /**
   * Description goes here
   */
  children: React.ReactNode;
};

const heading = cva(
  " font-bold leading-tight text-black  sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight",
  {
    variants: {
      intent: {
        normal: ["display-one"],
        semibold: ["display-two"],
        heading: ["heading-one"],
        body: ["font-bold"],
      },
      size: {
        "display-one": ["text-3xl"],
        "display-two": ["text-display-two tracking-[-.02em]"],
        "heading-one": ["text-heading-one tracking-[-.02em]"],
        "heading-two": ["text-heading-two tracking-[-.02em]"],
        body: ["text-body"],
      },
    },
  },
);

/**
 * Primary UI component for user interaction
 */
const Text = ({
  intent = "normal",
  size = "heading-one",
  as = "h1",
  children = "Heading goes here",
  className = "",
}: TextProps) => {
  const Element = as;
  return (
    <Element className={classNames(heading({ intent, size, className }))}>
      {children}
    </Element>
  );
};

export default Text;
