import { Dispatch, SetStateAction } from "react";
import { useQuery } from "react-query";
import { useAppDispatch } from "../redux/hooks";
import { deleteItem } from "../redux/bag/bag-slice";
import { setSession, clearUserData } from "../redux/userdata/userdata-slice";
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
        if (data.images[0] === "") {
          data.images[0] = noImage;
        }
        return data;
      })
  );
};

export const useFetchSessionApi = (
  token: string | null,
  setIsAuthorized: Dispatch<SetStateAction<boolean>>
) => {
  const dispatch = useAppDispatch();

  return useQuery(
    ["Profile", token],
    () =>
      fetch("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error occurred");
        }
      }),
    {
      enabled: !!token,
      retry: false,
      onSuccess: (data) => {
        console.log("checked session, everything is allright :)");
        dispatch(setSession(data));
        setIsAuthorized(true);
      },
      onError: () => {
        console.log("checked session, token is bad :(");
        dispatch(clearUserData());
      },
    }
  );
};
