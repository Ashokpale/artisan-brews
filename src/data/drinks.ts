export type Drink = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageId: string;
  alt: string;
};

export const drinks: Drink[] = [
  {
    id: "latte",
    name: "Latte",
    price: 149,
    description: "Smooth blend of espresso and steamed milk.",
    imageId: "1509042239860-f550ce710b93",
    alt: "Latte with soft foam in a ceramic cup",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 149,
    description: "Creamy foam atop rich espresso.",
    imageId: "1495474472287-4d71bcdd2085",
    alt: "Cappuccino with creamy foam",
  },
  {
    id: "mocha",
    name: "Mocha",
    price: 149,
    description: "Chocolate-infused coffee delight.",
    imageId: "1578314675249-a6910f80cc4e",
    alt: "Mocha in a glass with chocolate",
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    price: 149,
    description: "Refreshing blend of espresso, milk and ice.",
    imageId: "1461023058943-07fcbe16d735",
    alt: "Iced latte in a tall glass",
  },
  {
    id: "hot-chocolate",
    name: "Hot Chocolate",
    price: 179,
    description: "Chocolate, milk and sugar, served warm.",
    imageId: "1485808191679-5f86510681a2",
    alt: "Warm chocolate drink in a glass",
  },
  {
    id: "oreo-shake",
    name: "Oreo Shake",
    price: 149,
    description: "Oreo biscuit and milk mix.",
    imageId: "1517701604599-bb29b565090c",
    alt: "Thick shake poured into a glass",
  },
];
