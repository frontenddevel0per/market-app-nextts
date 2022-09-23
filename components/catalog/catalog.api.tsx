import { useQuery } from "react-query";
import { PAGINATION_STEP } from "./catalog.constant";

export const useFetchItemsApi = (category: string, page: number) => {
  return useQuery(
    ["catalogPages", category, page],
    () =>
      fetch(
        `https://api.escuelajs.co/api/v1/${category}products?offset=${
          (page - 1) * PAGINATION_STEP
        }&limit=${PAGINATION_STEP}`
      ).then((res) => res.json()),
    {
      keepPreviousData: true,
    }
  );
};
