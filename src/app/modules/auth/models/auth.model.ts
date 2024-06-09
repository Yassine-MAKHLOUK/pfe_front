export class AuthModel {
  authToken: string;
  role:string;
  refreshToken: string;
  expiresIn: Date;

  setAuth(auth: AuthModel) {
    this.authToken = auth.authToken;
    this.role = auth.role;
    this.refreshToken = auth.refreshToken;
    this.expiresIn = auth.expiresIn;
  }
}
