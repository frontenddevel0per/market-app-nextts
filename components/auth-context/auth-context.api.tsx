import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../redux/hooks";
import { clearUserData, setSession } from "../../redux/userdata/userdata-slice";

export const useFetchTokenApi = (token: string | null) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return useQuery(
    ["FirstLoadCheck", token],
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
      },
      onError: () => {
        console.log("checked session, token is bad :(");
        dispatch(clearUserData());
        router.push("/signin");
      },
    }
  );
};
