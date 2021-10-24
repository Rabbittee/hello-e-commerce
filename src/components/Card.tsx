import clsx from "clsx";
import { ReactNode } from "react";

type CardProps = {
  className?: string;
  children?: ReactNode;
};
export function Card({ className, children }: CardProps) {
  return (
    <div className={clsx("bg-white rounded-lg", className)}>{children}</div>
  );
}
