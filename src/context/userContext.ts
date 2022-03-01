import { createContext, useContext } from "react";

export interface IUserContext {
  currentUser: string | null;
  approveUser: (newUser: string) => void;
  dismissUser: () => void;
}

const contextDefault: IUserContext = {
  currentUser: null,
  approveUser: () => {},
  dismissUser: () => {},
};

export const UserContext = createContext<IUserContext>(contextDefault);

export const useUserContext = () =>
  useContext<IUserContext>(UserContext);
