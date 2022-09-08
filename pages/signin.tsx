import type { NextPage } from "next";
import SignIn from "../components/signin/signin";

const Login: NextPage = () => {
  return (
    <div className="login">
      <SignIn />
    </div>
  );
};

export default Login;
