import { useQuery } from "react-query";

export const useFetchCategoriesApi = () => {
  return useQuery("categories", () =>
    fetch("https://api.escuelajs.co/api/v1/categories").then((res) =>
      res.json()
    )
  );
};
