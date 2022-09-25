import { useMutation, useQuery } from "react-query";
import { useAppDispatch } from "../../redux/hooks";
import { setToken, setSession } from "../../redux/userdata/userdata-slice";

export const useSignInApi = () => {
  const dispatch = useAppDispatch();
  return useMutation(
    (signinData: string) =>
      fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: signinData,
      }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Throwed error! Error occurred!");
        }
      }),
    {
      onSuccess: (data) => {
        dispatch(setToken(data.access_token));
      },
      onError: () => {
        console.log("An error occurred");
      },
    }
  );
};

export const useCheckSessionApi = (token: string | null) => {
  const dispatch = useAppDispatch();
  return useQuery(
    ["Session", token],
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
      onSuccess: (data) => {
        dispatch(setSession(data));
      },
      onError: () => {
        console.log("An error occurred while checking session");
      },
    }
  );
};
