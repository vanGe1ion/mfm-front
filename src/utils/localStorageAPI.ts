export const LSAPIGetUserToken = (): string | null => {
  const currentUserToken = localStorage.getItem("userAccessToken");
  return currentUserToken ?? null;
};

export const LSAPISetUserToken = (token: string): void => {
  localStorage.setItem("userAccessToken", token);
};

export const LSAPIRemoveUserToken = (): void => {
  localStorage.removeItem("userAccessToken");
};
