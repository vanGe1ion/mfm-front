export interface IFormValues {
  login: string;
  password: string;
}

export interface ISignInResp {
  signIn: { accessToken: string };
}

export interface ISignInVars {
  signInDto: IFormValues;
}
