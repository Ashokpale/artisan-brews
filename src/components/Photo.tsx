import type { Ref } from "react";
import { unsplash, unsplashSrcSet } from "../lib/images";

type PhotoProps = {
  id: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  ref?: Ref<HTMLImageElement>;
};

export function Photo({
  id,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
  ref,
}: PhotoProps) {
  return (
    <img
      ref={ref}
      src={unsplash(id, priority ? 2000 : 1400)}
      srcSet={unsplashSrcSet(id)}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      draggable={false}
    />
  );
}
