type LoaderFuncArgs = { src: string; width: number; quality?: number };

export const myLoader = ({ src, width, quality = 75 }: LoaderFuncArgs) => {
  return `${src}?w=${width}&q=${quality}`;
};
