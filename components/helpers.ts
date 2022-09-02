type LoaderFuncArgs = { src: string; width: number; quality?: number };

export const myLoader = ({ src, width, quality = 75 }: LoaderFuncArgs) => {
  return `https://detkishop.com/upload/resize_cache/iblock${src}?w=${width}&q=${quality}`;
};
