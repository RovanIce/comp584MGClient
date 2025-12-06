import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { LoginResponse } from './login-response';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = 'auth_token';
  constructor(private http: HttpClient){}
  Login(Loginrequest:LoginRequest):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(environment.apiurl + "api/Admin",Loginrequest)
    .pipe(tap(response=>{
      if(response.sucess){
        localStorage.setItem(this.token,response.token);
      }
    }));
  }
  Logout(){
    localStorage.removeItem(this.token);
  }
  IsAuthenticated():boolean{
    return localStorage.getItem(this.token)!=null;
  }
}
