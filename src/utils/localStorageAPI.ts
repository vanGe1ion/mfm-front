import { IUser } from "@globalTypes";

export const LSAPIGetSignedInUser = (): IUser | null => {
  const currentUser = localStorage.getItem("currentUser");
  return currentUser ? JSON.parse(currentUser) : currentUser;
};
