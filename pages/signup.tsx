import type { NextPage } from "next";
import SignUp from "../components/signup/signup.component";
import { useAppSelector } from "../redux/hooks";
import { tokenValueSelector } from "../components/helpers";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Signup: NextPage = () => {
  const token = useAppSelector(tokenValueSelector);
  const router = useRouter();

  useEffect(() => {
    token !== null ? router.push("/") : null;
  }, [token]);

  return <div className="login">{token === null ? <SignUp /> : null}</div>;
};

export default Signup;
