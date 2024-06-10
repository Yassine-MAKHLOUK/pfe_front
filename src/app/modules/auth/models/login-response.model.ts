import { UserModel } from "./user.model";

export class LoginResponseModel {
    data: UserModel;
    message: string;
    status: string;
  }
  