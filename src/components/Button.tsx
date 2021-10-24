import clsx from "clsx";
import { cloneElement, isValidElement, ReactNode } from "react";

type ButtonProps = {
  className?: string;
  children?: ReactNode;
};
export function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={clsx("w-full bg-primary text-white p-3 rounded-lg", className)}
    >
      {children}
    </button>
  );
}

type Props = {
  children?: ReactNode;
};
export function SocialMedia({ children }: Props) {
  return (
    <button
      className={clsx(
        "bg-white p-4 rounded-lg w-14 h-14",
        "inline-flex justify-center items-center"
      )}
    >
      {isValidElement(children) &&
        cloneElement(children, { className: "w-full h-full" })}
    </button>
  );
}
