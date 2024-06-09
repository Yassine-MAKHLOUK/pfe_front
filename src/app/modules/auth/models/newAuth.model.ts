export class NewAuthModel {
    data: DataModel;
    refreshToken: string;
    expiresIn: Date;
  
    setAuth(auth: NewAuthModel) {
      this.data = auth.data;
      this.refreshToken = auth.refreshToken;
      this.expiresIn = auth.expiresIn;
    }
  }
export class DataModel {

    token: string;
    role:string;
  
    setAuth(data: DataModel) {
      this.token = data.token;
      this.role = data.role;
    }
  }
  