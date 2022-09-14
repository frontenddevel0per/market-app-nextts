import type { NextPage } from "next";
import SignIn from "../components/signin/signin.component";
import { useAppSelector } from "../redux/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Signin: NextPage = () => {
  const token = useAppSelector((state) => state.token.value);
  const router = useRouter();

  useEffect(() => {
    {
      token !== null ? router.push("/") : null;
    }
  }, [token]);

  return <div className="login">{token === null ? <SignIn /> : null}</div>;
};

export default Signin;
