import { Icon, Avatar } from "@/components";
import clsx from "clsx";

type NavProps = {
  className?: string;
};
export function Nav({ className }: NavProps) {
  return (
    <nav className={clsx("flex justify-between items-center", className)}>
      <button className="p-2">
        <Icon.MenuVariant className="w-5" />
      </button>

      <span className="inline-flex items-center gap-2">
        <Icon.Logo className="w-5" />

        <strong>Audio</strong>
      </span>

      <Avatar className="w-8" />
    </nav>
  );
}
