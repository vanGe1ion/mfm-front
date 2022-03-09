export const localStorageApiInit = (): void => {
  if (!localStorage.getItem("login")) localStorage.setItem("login", "user");
  if (!localStorage.getItem("password"))
    localStorage.setItem("password", "pass");
};

export const localStorageApiVerifyUser = (
  login: string,
  password: string
): boolean => {
  return (
    localStorage.getItem("login") === login &&
    localStorage.getItem("password") === password
  );
};
