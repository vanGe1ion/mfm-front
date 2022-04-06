export const LSAPIInit = (): void => {
  if (!localStorage.getItem("login")) localStorage.setItem("login", "user");
  if (!localStorage.getItem("password"))
    localStorage.setItem("password", "pass");
};

export const LSAPIIsSignedIn = (): boolean => {
  return typeof localStorage.getItem("currentUserId") === "string";
};

export const LSAPIVerifyUser = (login: string, password: string): boolean => {
  return (
    localStorage.getItem("login") === login &&
    localStorage.getItem("password") === password
  );
};

export const LSAPISetFavouriteGenres = (newGenres: number[]): void => {
  localStorage.setItem("favouriteGenres", JSON.stringify(newGenres));
};

export const LSAPIGetFavouriteGenres = (): number[] => {
  const lsData = localStorage.getItem("favouriteGenres");
  return lsData ? JSON.parse(lsData) : [];
};
