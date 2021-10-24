import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
export function Auth({ children }: Props) {
  return (
    <main
      className={clsx(
        "bg-auth h-screen p-8",
        "flex flex-col",
        "text-white text-sm text-center"
      )}
    >
      <header className="space-y-4 mt-20">
        <h1 className="text-6xl">Audio</h1>

        <p>It's modular and designed to last</p>
      </header>

      <form className="flex-1 flex flex-col mt-56">{children}</form>
    </main>
  );
}
