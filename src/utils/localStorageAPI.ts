import { IUser } from "@globalTypes";

export const LSAPIGetSignedInUser = (): IUser | null => {
  const currentUser = localStorage.getItem("currentUser");
  if(currentUser){
    const {id, login} = JSON.parse(currentUser);
    return {id: +id, login} as IUser;
  }
  return null;
};
