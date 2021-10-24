import { ReactNode } from "react";
import clsx from "clsx";

interface Item {
  id: string;
}

type ListProps<T extends Item> = {
  items: T[];
  className?: string;
  children: (item: T) => ReactNode;
};
export function List<T extends Item>({
  items,
  className,
  children,
}: ListProps<T>) {
  return (
    <ul className={clsx("flex flex-nowrap overflow-auto", className)}>
      {items.map((item) => (
        <li key={item.id}>{children(item)}</li>
      ))}
    </ul>
  );
}
