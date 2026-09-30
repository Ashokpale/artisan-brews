export type MenuCategoryId = "coffee" | "shakes" | "food" | "addons";

export type MenuPrice = number | "MRP";

export type MenuItem = {
  name: string;
  price: MenuPrice;
  note?: string;
};

export type MenuGroup = {
  label: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: MenuCategoryId;
  label: string;
  note?: string;
  groups: MenuGroup[];
};

export const menu: MenuCategory[] = [
  {
    id: "coffee",
    label: "Coffee",
    groups: [
      {
        label: "Coffee & espresso",
        items: [
          { name: "Espresso", price: 69, note: "Strong and bold — pure coffee shot." },
          { name: "Double Espresso", price: 99, note: "Strong and bold — 2 pourings of 30 ml." },
          { name: "Cappuccino", price: 149, note: "Creamy foam atop rich espresso." },
          { name: "Latte", price: 149, note: "Smooth blend of espresso and steamed milk." },
          { name: "Flat White", price: 149, note: "Velvety microfoam with intense espresso." },
          { name: "Mocha", price: 149, note: "Chocolate-infused coffee delight." },
          { name: "Americano", price: 149, note: "Rich concentrate with hot water." },
          { name: "Iced Latte", price: 149, note: "Refreshing blend of espresso, milk and ice." },
          { name: "Hot Chocolate", price: 179, note: "Rich heated beverage with chocolate, milk and sugar." },
          { name: "Espresso Tonic", price: 179, note: "Sweet and bitter espresso mixed with tonic water." },
        ],
      },
    ],
  },
  {
    id: "shakes",
    label: "Shakes",
    note: "Some items on this menu are seasonal.",
    groups: [
      {
        label: "Milkshakes & thickshakes",
        items: [
          { name: "Strawberry", price: 129, note: "Strawberry and milk mix." },
          { name: "Chocolate", price: 129, note: "Chocolate and milk mix." },
          { name: "Pineapple", price: 129, note: "Pineapple and milk mix." },
          { name: "Butterscotch", price: 129, note: "Butterscotch and milk mix." },
          { name: "Mango", price: 129, note: "Mango and milk mix." },
          { name: "Oreo", price: 149, note: "Oreo biscuit and milk mix." },
          { name: "Kitkat", price: 149, note: "Kitkat and milk mix." },
          { name: "Blueberry", price: 199, note: "Blueberry and milk mix." },
        ],
      },
    ],
  },
  {
    id: "food",
    label: "Food",
    groups: [
      {
        label: "Bites",
        items: [
          { name: "Veg Nuggets 6 pcs", price: 99 },
          { name: "Chicken Nuggets 6 pcs", price: 149 },
          { name: "French Fries", price: 79 },
          { name: "Peri Peri French Fries", price: 99 },
          { name: "Potato Shots 6 pcs", price: 99 },
          { name: "Potato Cheese Shots 6 pcs", price: 129 },
          { name: "Chicken Popcorn 6 pcs", price: 149 },
          { name: "Chicken Wings 4 pcs", price: 199 },
        ],
      },
      {
        label: "Sandwich",
        items: [
          { name: "Veg Sandwich", price: 99 },
          { name: "Chicken Sandwich", price: 149 },
        ],
      },
      {
        label: "Pasta",
        items: [
          { name: "White Sauce Pasta", price: 199 },
          { name: "Red Sauce Pasta", price: 199 },
        ],
      },
      {
        label: "Burger",
        items: [
          { name: "Veg Burger", price: 99 },
          { name: "Chicken Burger", price: 149 },
        ],
      },
      {
        label: "Maggi",
        items: [
          { name: "Plain Maggi", price: 99 },
          { name: "Cheese Maggi", price: 149 },
          { name: "Egg Maggi", price: 169 },
        ],
      },
      {
        label: "Drinks",
        items: [
          { name: "Water Bottle", price: "MRP" },
          { name: "Cold Drink", price: "MRP" },
        ],
      },
    ],
  },
  {
    id: "addons",
    label: "Add-ons",
    groups: [
      {
        label: "For the cup",
        items: [
          {
            name: "Hazelnut Flavour",
            price: 49,
            note: "Rich, buttery, and slightly sweet, with earthy undertones.",
          },
          {
            name: "Vanilla Flavour",
            price: 49,
            note: "Deep and slightly musky, with hints of caramel.",
          },
          { name: "Oat Milk", price: 99, note: "100% vegan, naturally lactose-free." },
        ],
      },
    ],
  },
];
