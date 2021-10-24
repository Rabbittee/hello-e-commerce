import { Icon, Card } from "@/components";
import clsx from "clsx";

type TopProductProps = {
  className?: string;
  name: string;
  img: string;
};
export function TopProduct({ className, name, img }: TopProductProps) {
  return (
    <Card className={clsx("flex p-6", className)}>
      <div className="flex-1 flex flex-col">
        <h2 className="text-xl font-bold">{name}</h2>

        <a
          href="#"
          className="inline-flex items-center gap-2 mt-auto text-primary"
        >
          <span>Shop now</span>

          <Icon.ArrowRight className="w-5" />
        </a>
      </div>

      <div className="flex-1">
        <img src={img} alt={`${name}'s picture'`} />
      </div>
    </Card>
  );
}

type FeatureProductProps = {
  className?: string;
  name: string;
  img: string;
  price: string;
};

export function FeatureProduct({
  className,
  name,
  img,
  price,
}: FeatureProductProps) {
  return (
    <Card className={clsx("flex flex-col p-2 gap-2", className)}>
      <div>
        <img src={img} alt={`${name}'s picture'`} />
      </div>

      <div className="flex flex-col gap-1 mb-2">
        <p>{name}</p>

        <strong className="text-xs">{price}</strong>
      </div>
    </Card>
  );
}
