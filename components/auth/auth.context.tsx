import { useRouter } from "next/router";
import { FC, useState, createContext, useContext } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useFetchSessionApi } from "../shared.api";
import { tokenValueSelector } from "../helpers";
import { AuthProviderProps, AuthContextValues } from "./auth.types";
import LoadingPlug from "../loading-plug/loading-plug.component";

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
  const token = useAppSelector(tokenValueSelector);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const { isFetching } = useFetchSessionApi(token, setIsAuthorized);

  return (
    <AuthContext.Provider value={{ isAuthorized, setIsAuthorized }}>
      {isFetching ? <LoadingPlug /> : children}
    </AuthContext.Provider>
  );
};
