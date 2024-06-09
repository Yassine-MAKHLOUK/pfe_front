import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserModel } from '../../../models/user.model';
import { AuthModel } from '../../../models/auth.model';
import { UsersTable } from '../../../../../_fake/users.table';
import { environment } from '../../../../../../environments/environment';
import { LoginModel } from '../../../models/login.model';

const API_USERS_URL = `${environment.apiUrl}/users`;
const API_AUTH_URL = `${environment.apiUrl}/auth`;

@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService {
  constructor(private http: HttpClient) {}

  // public methods
  login(email: string, password: string): Observable<any> {
    const creds: LoginModel = { email, password };

  if (!email || !password) {
    return throwError(new Error('Not Found'));
  }

  return this.http.post<LoginModel>(API_AUTH_URL + '/login', creds);
  }

  createUser(user: UserModel): Observable<any> {
    user.roles = [2]; // Manager
    user.authToken = 'auth-token-' + Math.random();
    user.refreshToken = 'auth-token-' + Math.random();
    user.expiresIn = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000);
    user.pic = './assets/media/avatars/300-1.jpg';

    return this.http.post<UserModel>(API_USERS_URL, user);
  }

  forgotPassword(email: string): Observable<boolean> {
    return this.getAllUsers().pipe(
      map((result: UserModel[]) => {
        const user = result.find(
          (u) => u.email.toLowerCase() === email.toLowerCase()
        );
        return user !== undefined;
      })
    );
  }

  getUserByToken(token: string): Observable<UserModel | undefined> {
    const user = this.http.get<any>(API_AUTH_URL + "/user/" + token).pipe(
      map((result: UserModel) => {
        console.log(result);
        
        return result;
      })
    );



    return user;
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(API_USERS_URL);
  }
}
