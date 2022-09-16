import type { NextPage } from "next";
import SignIn from "../components/signin/signin.component";
import { useAppSelector } from "../redux/hooks";
import { tokenValueSelector } from "../components/helpers";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Signin: NextPage = () => {
  const token = useAppSelector(tokenValueSelector);
  const router = useRouter();

  useEffect(() => {
    {
      token !== null ? router.push("/") : null;
    }
  }, [token]);

  return <div className="login">{token === null ? <SignIn /> : null}</div>;
};

export default Signin;
