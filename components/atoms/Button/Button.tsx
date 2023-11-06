import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const button = cva(
  "rounded-md text-base flex items-center gap-2 duration-300 ease-in-out",
  {
    variants: {
      intent: {
        primary: [" bg-primary text-white hover:bg-primary/80"],
        secondary: [
          " bg-black/20 text-black hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30",
        ],
        tertiary: ["bg-white text-body-color dark:bg-dark-btn"],
        text: ["text-dark bg-transparent hover:opacity-70 dark:text-white"],
      },
      size: {
        medium: "py-3 px-7",
        large: "py-4 px-8",
      },
      fontWeight: {
        semibold: "font-semibold",
        bold: "font-bold",
      },
      shadow: {
        none: "shadow-none",
        one: "shadow-one",
        signUp: "shadow-signUp",
      },
      shadowHover: {
        true: "hover:shadow-signUp",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "large",
      fontWeight: "semibold",
      shadow: "none",
      shadowHover: false,
    },
  },
);

export type ButtonProps = VariantProps<typeof button> & {
  /**
   * Description goes here
   */
  intent?: "primary" | "secondary" | "tertiary" | "text";
  /**
   * Description goes here
   */
  size?: "medium" | "large";
  /**
   * Description goes here
   */
  fontWeight?: "semibold" | "bold";
  /**
   * Description goes here
   */
  label?: string;
  /**
   * Description goes here
   */
  ariaLabel?: string;
  /**
   * Description goes here
   */
  icon?: React.ReactNode;
  /**
   * Description goes here
   */
  linkUrl?: string;
  /**
   * Description goes here
   */
  className?: string;
  /**
   * Description goes here
   */
  shadow?: "none" | "one" | "signUp";
  /**
   * Description goes here
   */
  shadowHover?: boolean;
  /**
   * Description goes here
   */
  onClick?: () => void;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  className = "",
  intent = "primary",
  label = "Button",
  fontWeight = "semibold",
  ariaLabel = "Aria Label",
  size = "medium",
  linkUrl = "",
  shadow = "none",
  shadowHover = false,
  icon,
  onClick,
  ...props
}: ButtonProps) => {
  const formatId = label
    .replace(" ", "-")
    .replace("'", "")
    .toLocaleLowerCase()
    .trim();
  const iconContent = icon ? <span className="btn-icon">{icon}</span> : null;
  const textContent =
    label !== "" ? label : <span className="sr-only">{ariaLabel}</span>;
  return linkUrl === "" ? (
    <button
      className={twMerge(
        button({ intent, size, className, fontWeight, shadow, shadowHover }),
      )}
      {...props}
      id={formatId}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {textContent}
      {iconContent}
    </button>
  ) : (
    <Link
      href={linkUrl}
      className={twMerge(
        button({ intent, size, className, fontWeight, shadow, shadowHover }),
      )}
      aria-label={ariaLabel}
      {...props}
    >
      {textContent}
      {iconContent}
    </Link>
  );
};
