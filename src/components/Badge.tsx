import { ReactNode } from "react";
import clsx from "clsx";

type BadgeProps = {
  className?: string;
  children?: ReactNode;
};
export function Badge({ className, children }: BadgeProps) {
  return (
    <a href="#" className={clsx("rounded-xl px-4 py-1", className)}>
      {children}
    </a>
  );
}
