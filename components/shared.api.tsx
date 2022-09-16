import { useQuery } from "react-query";
import { useAppDispatch } from "../redux/hooks";
import { deleteItem } from "../redux/bag/bag-slice";

export const useItemApi = (id: number) => {
  const dispatch = useAppDispatch();
  return useQuery(["item", id], () =>
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) => {
      if (!res.ok) {
        dispatch(deleteItem(id));
      }
      return res.json();
    })
  );
};
