import { createContext, useContext } from "react";
import { IUserContext } from "../types";

const contextDefault: IUserContext = {
  currentUser: null,
  approveUser: () => {},
  dismissUser: () => {},
};

const UserContext = createContext<IUserContext>(contextDefault);

export const useUserContext = (): IUserContext =>
  useContext<IUserContext>(UserContext);

export default UserContext;
