import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { HttpService } from 'src/app/core/http/http.service';
import { ServiceUrls } from 'src/app/core/service-urls';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtDecode = jwt_decode;
  constructor(
    private httpService: HttpService,
    private tokenStorageService: TokenStorageService,
  ) { }

  login(email: string, password: string): Observable<any> {
    return this.httpService.post(`${ServiceUrls.RESULT_ANALYSIS_API}/${ServiceUrls.LOGIN_URI}`, {
      email,
      password
    });
  }

  register(email: string, password: string): Observable<any> {
    return this.httpService.post(`${ServiceUrls.RESULT_ANALYSIS_API}/${ServiceUrls.SIGN_IN_URI}`, {
      email,
      password
    });
  }

  isUserLoggedIn() {
    const token = this.tokenStorageService.getToken();
    if (!token) {
      return false;
    }
    const decodedToken: any = this.jwtDecode(token);
    const expiresAt = decodedToken.exp;
    if ((Math.floor((new Date()).getTime() / 1000)) >= expiresAt) {
      return false;
    }
    return true;
  }

  logout() {
    this.tokenStorageService.deleteToken();
    this.tokenStorageService.deleteUser();
  }
}
