import clsx from "clsx";
import { ReactNode } from "react";

type SectionProps = {
  className?: string;
  title: string;
  children?: ReactNode;
  optional?: ReactNode;
};
export function Section({
  className,
  title,
  optional,
  children,
}: SectionProps) {
  return (
    <section className={clsx("flex flex-col", className)}>
      <header className="flex justify-between">
        <h2 className="text-base">{title}</h2>

        {optional}
      </header>

      {children}
    </section>
  );
}
