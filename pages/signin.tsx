import type { NextPage } from "next";
import SignIn from "../components/signin/signin.component";
import { useAppSelector } from "../redux/hooks";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const token = useAppSelector((state) => state.token.value);
  const router = useRouter();

  {
    token !== null ? router.push("/") : null;
  }

  return <div className="login">{token === null ? <SignIn /> : null}</div>;
};

export default Login;
