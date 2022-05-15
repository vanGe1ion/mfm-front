export default class LocalStorageToken {
  static get(): string | null {
    return localStorage.getItem("userAccessToken");
  }

  static set(token: string): void {
    localStorage.setItem("userAccessToken", token);
  }

  static remove(): void {
    localStorage.removeItem("userAccessToken");
  }
}
