import { useRouter } from "next/router";
import {
  FC,
  useState,
  createContext,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { useQuery } from "react-query";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { tokenValueSelector } from "../helpers";
import { setSession, clearUserData } from "../../redux/userdata/userdata-slice";

type AuthProviderProps = {
  children?: ReactNode;
};

type AuthContextValues = {
  isAuthorized: boolean;
  setIsAuthorized: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextValues | null>(null);

export const useAuthContext = () => {
  const contextValue = useContext(AuthContext);

  if (!contextValue) {
    throw new Error(`useAuthContext must be used within a AuthContext`);
  }
  return contextValue;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const token = useAppSelector(tokenValueSelector);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const { isFetching } = useQuery(
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
        setIsAuthorized(true);
      },
      onError: () => {
        console.log("checked session, token is bad :(");
        dispatch(clearUserData());
        router.push("/signin");
      },
    }
  );

  return (
    <AuthContext.Provider value={{ isAuthorized, setIsAuthorized }}>
      {!isFetching && children}
    </AuthContext.Provider>
  );
};
