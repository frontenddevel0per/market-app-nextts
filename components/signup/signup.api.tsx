import { useMutation } from "react-query";
import { useRouter } from "next/router";

export const useSignUp = () => {
  const router = useRouter();
  return useMutation(
    (data: string) =>
      fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }).then((res) => res.json()),
    {
      onSuccess: () => {
        router.push("/signin");
      },
    }
  );
};
