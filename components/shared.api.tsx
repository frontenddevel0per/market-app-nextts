import { useQuery } from "react-query";

export const useItemApi = (id: number) => {
  return useQuery(["item", id], () =>
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) =>
      res.json()
    )
  );
};
