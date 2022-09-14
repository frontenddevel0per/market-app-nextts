import { useMutation } from "react-query";
import { useAppDispatch } from "../../redux/hooks";
import { setToken } from "../../redux/token/token-slice";

export const useSignIn = () => {
  const dispatch = useAppDispatch();
  return useMutation(
    (signinData: string) =>
      fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: signinData,
      }).then((res) => res.json()),
    {
      onSuccess: (data) => {
        console.log("success");
        console.log(data.access_token);
        dispatch(setToken(data.access_token));
      },
      onError: () => {
        console.log("An error occurred");
      },
    }
  );
};
