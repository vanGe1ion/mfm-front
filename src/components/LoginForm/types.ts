export interface IFormValues {
  login: string;
  password: string;
}

export interface ISignInResp {
  login: { accessToken: string };
}

export interface ISignInVars {
  signInDto: IFormValues;
}
