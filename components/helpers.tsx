import { useAppSelector } from "../redux/hooks";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";

type LoaderFuncArgs = { src: string; width: number; quality?: number };

export const imageLoader = ({ src, width, quality = 75 }: LoaderFuncArgs) => {
  return `${src}?w=${width}&q=${quality}`;
};

export const useBagSelector = () => {
  return useAppSelector((state) => state.bag.value);
};

export const useTokenSelector = () => {
  return useAppSelector((state) => state.token.value);
};

export const bagValueSelector = (state: RootState) => state.bag.value;

export const bagLengthSelector = (state: RootState) => state.bag.value.length;

export const tokenValueSelector = (state: RootState) => state.token.value;
