export type SessionProps = {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
};

export type UserData = {
  value: {
    token: string | null;
    session?: SessionProps | null;
  };
};
