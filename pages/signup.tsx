import type { NextPage } from "next";
import SignUp from "../components/signup/signup.component";
import { useAppSelector } from "../redux/hooks";
import { useRouter } from "next/router";

const Signup: NextPage = () => {
  const token = useAppSelector((state) => state.token.value);
  const router = useRouter();

  {
    token !== null ? router.push("/") : null;
  }

  return <div className="login">{token === null ? <SignUp /> : null}</div>;
};

export default Signup;
