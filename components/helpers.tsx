import type { RootState } from "../redux/store";

type LoaderFuncArgs = { src: string; width: number; quality?: number };

export const imageLoader = ({ src, width, quality = 75 }: LoaderFuncArgs) => {
  return `${src}?w=${width}&q=${quality}`;
};

export const bagValueSelector = (state: RootState) => state.bag.value;

export const bagLengthSelector = (state: RootState) => state.bag.value.length;

export const tokenValueSelector = (state: RootState) =>
  state.userdata.value.token;

export const sessionValueSelector = (state: RootState) =>
  state.userdata.value.session;

export const categoryValueSelector = (state: RootState) => state.category.value;
