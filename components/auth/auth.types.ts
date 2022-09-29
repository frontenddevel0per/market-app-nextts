import { ReactNode, Dispatch, SetStateAction } from "react";

export type AuthProviderProps = {
  children: ReactNode;
};

export type AuthContextValues = {
  isAuthorized: boolean;
  setIsAuthorized: Dispatch<SetStateAction<boolean>>;
};
