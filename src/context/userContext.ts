import { createContext, useContext } from "react";
import { IUserContext } from "@globalTypes";

const contextDefault: IUserContext = {
  currentUser: null,
  approveUser: async () => {},
  dismissUser: async () => {},
};

const UserContext = createContext<IUserContext>(contextDefault);

export const useUserContext = (): IUserContext =>
  useContext<IUserContext>(UserContext);

export default UserContext;
