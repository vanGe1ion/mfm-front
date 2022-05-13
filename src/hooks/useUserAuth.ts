import { useEffect, useState } from "react";
import { IUserContext } from "@globalTypes";
import { IUser } from "@globalTypes";
import { useApolloClient, useLazyQuery } from "@apollo/client";
import { GET_USER } from "@queries/user";
import {
  LSAPIRemoveUserToken,
  LSAPISetUserToken,
} from "@utils/localStorageAPI";
import { IGetUserResp } from "./types";

const useUserAuth = (): IUserContext => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [getUser] = useLazyQuery<IGetUserResp>(GET_USER);
  const apolloClient = useApolloClient();

  useEffect(() => {
    getUser()
      .then((res) => {
        setCurrentUser(res.data!.getUserById as IUser);
      })
      .catch(() => {
        setCurrentUser(null);
      });
  }, []);

  const approveUser = async (token: string): Promise<void> => {
    LSAPISetUserToken(token);
    await apolloClient.clearStore();
    const user: IUser = (await getUser()).data!.getUserById;
    setCurrentUser(user);
  };

  const dismissUser = async (): Promise<void> => {
    LSAPIRemoveUserToken();
    await apolloClient.clearStore();
    setCurrentUser(null);
  };

  return { currentUser, approveUser, dismissUser };
};

export default useUserAuth;
