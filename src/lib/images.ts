export function unsplash(id: string, width = 1600) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=72`;
}

export function unsplashSrcSet(id: string) {
  return [640, 960, 1400, 2000]
    .map((width) => `${unsplash(id, width)} ${width}w`)
    .join(", ");
}
