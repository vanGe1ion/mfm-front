export interface IFormValues {
  login: string;
  password: string;
}

export interface ISignInResp {
  signIn: { access_token: string };
}

export interface ISignInVars {
  signInDto: IFormValues;
}
