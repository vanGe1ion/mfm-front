import React, { FC } from "react";
import UserContext from "@context/userContext";
import useUserAuth from "@hooks/useUserAuth";
import { LSAPIGetSignedInUser } from "@utils/localStorageAPI";

const UserContextProvirer: FC = ({ children }) => {
  const currentUserLocal = LSAPIGetSignedInUser();
  const { currentUser, approveUser, dismissUser } =
    useUserAuth(currentUserLocal);

  return (
    <UserContext.Provider value={{ currentUser, approveUser, dismissUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvirer;
