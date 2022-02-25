export const localStorageApiInit = (): void => {
  localStorage.getItem("userLogin") 
    ?? localStorage.setItem("userLogin", "user");
  localStorage.getItem("password") 
    ?? localStorage.setItem("password", "pass");
};
