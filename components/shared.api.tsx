import { useQuery } from "react-query";
import { useAppDispatch } from "../redux/hooks";
import { deleteItem } from "../redux/bag/bag-slice";
import noImage from "../resources/img/noimage.png";

export const useItemApi = (id: number) => {
  const dispatch = useAppDispatch();
  return useQuery(["item", id], () =>
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          dispatch(deleteItem(id));
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.images[0] === "") {
          data.images[0] = noImage;
        }
        return data;
      })
  );
};
