import { useQuery } from "react-query";

type LoaderFuncArgs = { src: string; width: number; quality?: number };

export const myLoader = ({ src, width, quality = 75 }: LoaderFuncArgs) => {
  return `${src}?w=${width}&q=${quality}`;
};

export const useQueryItem = (id: number) => {
  return useQuery(["item", id], () =>
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) =>
      res.json()
    )
  );
};
