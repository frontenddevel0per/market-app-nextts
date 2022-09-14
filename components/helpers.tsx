import { useAppSelector } from "../redux/hooks";

type LoaderFuncArgs = { src: string; width: number; quality?: number };

export const myLoader = ({ src, width, quality = 75 }: LoaderFuncArgs) => {
  return `${src}?w=${width}&q=${quality}`;
};

export const useBagSelector = () => {
  return useAppSelector((state) => state.bag.value);
};

export const useTokenSelector = () => {
  return useAppSelector((state) => state.token.value);
};
