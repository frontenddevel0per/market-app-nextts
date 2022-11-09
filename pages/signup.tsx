import type { NextPage } from "next";
import SignUp from "../components/signup/signup.component";
import { useAppSelector } from "../redux/hooks";
import { tokenValueSelector } from "../components/helpers";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const Signup: NextPage = () => {
  const token = useAppSelector(tokenValueSelector);
  const router = useRouter();

  useEffect(() => {
    token !== null ? router.push("/") : null;
  }, [token]);

  return (
    <>
      <Head>
        <title>SignUp</title>
        <meta
          name="keywords"
          content="зарегистрироваться в интернет магазине"
        />
      </Head>
      <div className="login">{token === null ? <SignUp /> : null}</div>
    </>
  );
};

export default Signup;
