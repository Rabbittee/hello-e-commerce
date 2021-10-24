import clsx from "clsx";
import { ReactNode } from "react";

type PanelProps = {
  className?: string;
  children?: ReactNode;
};
export function Panel({ className, children }: PanelProps) {
  return (
    <div className={clsx("bg-gray-lighter rounded-t-3xl", className)}>
      {children}
    </div>
  );
}
