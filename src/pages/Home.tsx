import {
  Icon,
  Input,
  Nav,
  Panel,
  Section,
  List,
  Badge,
  TopProduct,
  FeatureProduct,
} from "@/components";
import clsx from "clsx";

import IMG from "@/assets/product.png";

export function Home() {
  const category = "Headphone";

  const categories = [
    {
      id: "Headphone",
      name: "Headphone",
    },
    {
      id: "Headband",
      name: "Headband",
    },
    {
      id: "Earpads",
      name: "Earpads",
    },
    {
      id: "Earpads",
      name: "Earpads",
    },
  ];

  const topProducts = [
    {
      id: "1",
      name: "TMA-2 Modular Headphone",
      img: IMG,
    },
    {
      id: "2",
      name: "C02 - Cable",
      img: IMG,
    },
  ];

  const featureProducts = [
    {
      id: "1",
      name: "TMA-2 Modular Headphone",
      img: IMG,
      price: "USD 350",
    },
    {
      id: "2",
      name: "C02 - Cable",
      img: IMG,
      price: "USD 350",
    },
  ];

  return (
    <main className="text-sm h-screen flex flex-col">
      <Nav className="px-4 py-4" />

      <header className="px-6 mb-8">
        <p>Hi, Andrea</p>

        <h1 className="font-bold text-2xl mt-2">
          What are you looking for today ?
        </h1>

        <Input
          type="search"
          name="search"
          placeholder="Search headphone"
          icon={<Icon.Search />}
          className="border border-gray-dark w-full mt-6"
        />
      </header>

      <Panel className="flex-1 px-6 py-4 flex flex-col gap-4">
        <List items={categories} className="gap-6 py-2">
          {(item) => (
            <Badge
              className={clsx(
                item.id === category
                  ? "bg-primary text-white"
                  : "text-gray-darker"
              )}
            >
              {item.name}
            </Badge>
          )}
        </List>

        <List items={topProducts} className="gap-6">
          {(item) => <TopProduct className="w-[80vw]" {...item} />}
        </List>

        {/* Features Products */}
        <Section
          title="Featured Products"
          optional={
            <a href="#" className="text-gray-darker">
              See All
            </a>
          }
          className="gap-4"
        >
          <List items={featureProducts} className="gap-6">
            {(item) => (
              <FeatureProduct className="w-[40vw] h-[14rem]" {...item} />
            )}
          </List>
        </Section>
      </Panel>
    </main>
  );
}
