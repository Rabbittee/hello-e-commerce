import clsx from "clsx";
import { cloneElement, isValidElement, ReactNode } from "react";

type Props = {
  type: "email" | "password" | "search";
  name: string;
  placeholder: string;
  icon: ReactNode;
  className?: string;
};
export function Input({ type, name, placeholder, icon, className }: Props) {
  return (
    <label
      className={clsx(
        "inline-flex items-center gap-2",
        "bg-white",
        "p-3",
        "rounded-lg",
        "focus-within:ring ring-primary",
        className
      )}
    >
      {isValidElement(icon) &&
        cloneElement(icon, {
          className: "w-5 text-gray-dark",
        })}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={clsx(
          "w-full",
          "outline-none",
          "text-black placeholder-gray-dark"
        )}
      />
    </label>
  );
}
