import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap, ScrollTrigger } from "./lib/gsap";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Story } from "./components/Story/Story";
import { BrandMoment } from "./components/BrandMoment/BrandMoment";
import { CoffeeJourney } from "./components/CoffeeJourney/CoffeeJourney";
import { Drinks } from "./components/Drinks/Drinks";
import { BrandWorld } from "./components/BrandWorld/BrandWorld";
import { Truck } from "./components/Truck/Truck";
import { BehindBar } from "./components/BehindBar/BehindBar";
import { Menu } from "./components/Menu/Menu";
import { Location } from "./components/Location/Location";
import { Community } from "./components/Community/Community";
import { Journal } from "./components/Journal/Journal";
import { FinalCTA } from "./components/FinalCTA/FinalCTA";
import { Footer } from "./components/Footer/Footer";

const lenisOptions = {
  lerp: 0.085,
  smoothWheel: true,
  autoRaf: false,
  anchors: { offset: -8 },
  allowNestedScroll: true,
};

function ScrollSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onScroll = () => ScrollTrigger.update();
    const remove = lenis.on("scroll", onScroll);
    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      remove();
      gsap.ticker.remove(ticker);
      window.removeEventListener("load", refresh);
    };
  }, [lenis]);

  return null;
}

export default function App() {
  return (
    <ReactLenis root options={lenisOptions}>
      <ScrollSync />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <BrandMoment />
        <CoffeeJourney />
        <Drinks />
        <BrandWorld />
        <Truck />
        <BehindBar />
        <Menu />
        <Location />
        <Community />
        <Journal />
        <FinalCTA />
      </main>
      <Footer />
    </ReactLenis>
  );
}
