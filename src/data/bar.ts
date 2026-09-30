export type BarFrame = {
  number: string;
  title: string;
  imageId: string;
  alt: string;
  className: string;
};

export const barFrames: BarFrame[] = [
  {
    number: "01",
    title: "Espresso",
    imageId: "1514432324607-a09d9b4aefdd",
    alt: "Espresso shot from above",
    className: "col-span-12 md:col-span-7",
  },
  {
    number: "02",
    title: "Steam",
    imageId: "1541167760496-1628856ab772",
    alt: "Steamed milk and latte art",
    className: "col-span-7 md:col-span-4 md:col-start-9 md:mt-28",
  },
  {
    number: "03",
    title: "Pour",
    imageId: "1495474472287-4d71bcdd2085",
    alt: "Coffee being poured",
    className: "col-span-5 md:col-span-3 md:col-start-2",
  },
  {
    number: "04",
    title: "Serve",
    imageId: "1497935586351-b67a49e012bf",
    alt: "Hands holding a coffee cup",
    className: "col-span-12 md:col-span-6 md:col-start-6",
  },
];
