import { createContext, useContext } from "react";
import { IUserContext } from "../types";


const contextDefault: IUserContext = {
  currentUser: null,
  approveUser: () => {},
  dismissUser: () => {},
};

export const UserContext = createContext<IUserContext>(contextDefault);

export const useUserContext = () =>
  useContext<IUserContext>(UserContext);
