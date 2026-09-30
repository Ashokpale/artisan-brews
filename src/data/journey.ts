export type JourneyStage = {
  number: string;
  title: string;
  description: string;
  imageId: string;
  alt: string;
};

export const journey: JourneyStage[] = [
  {
    number: "01",
    title: "Roast",
    description: "Small-batch beans, roasted for sweetness and a clean finish.",
    imageId: "1447933601403-0c6688de566e",
    alt: "Roasted coffee beans in warm light",
  },
  {
    number: "02",
    title: "Grind",
    description: "Ground to order, so the cup stays bright from the first sip.",
    imageId: "1511920170033-f8396924c348",
    alt: "Coffee beans held before grinding",
  },
  {
    number: "03",
    title: "Brew",
    description: "Espresso, filter, and cold brew made at the window.",
    imageId: "1559056199-641a0ac8b55e",
    alt: "Coffee pouring through a filter",
  },
  {
    number: "04",
    title: "Enjoy",
    description: "Passed across the counter, wherever the truck is parked.",
    imageId: "1445116572660-236099ec97a0",
    alt: "People sharing coffee at a sunlit table",
  },
];
