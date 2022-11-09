import type { NextPage } from "next";
import Head from "next/head";
import SignIn from "../components/signin/signin.component";
import { useAppSelector } from "../redux/hooks";
import {
  tokenValueSelector,
  sessionValueSelector,
} from "../components/helpers";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Signin: NextPage = () => {
  const token = useAppSelector(tokenValueSelector);
  const session = useAppSelector(sessionValueSelector);
  const router = useRouter();

  useEffect(() => {
    {
      !!token && !!session ? router.push("/") : null;
    }
  }, [token, session]);

  return (
    <>
      <Head>
        <title>SignIn</title>
        <meta name="keywords" content="войти интернет магазин" />
      </Head>
      <div className="login">{<SignIn />}</div>
    </>
  );
};

export default Signin;
