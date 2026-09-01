import { Injectable,inject,PLATFORM_ID,signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BrowserService } from './browser.service';
import { HttpClient } from '@angular/common/http';
import { API } from '../constants/api.constants';
import { LoginRequest, LoginResponse } from '../../core/models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private browser = inject(BrowserService);
  private http = inject(HttpClient);
  private readonly _currentUser = signal<LoginResponse | null>(null);
  readonly currentUser=this._currentUser.asReadonly();

  private readonly _isAuthenticated = signal(false);
  readonly isAuthenticated = this._isAuthenticated.asReadonly();

  
  intializeAuth():void{
    const user = this.getUser();
    const token = this.getToken();

    if(user && token){
      this.setAuthenticated(true);
      this.setCurrentUser(user);
    }

  }

  login(data: LoginRequest): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(
      API.BASE_URL + API.LOGIN,
      data
    );

  }

  saveToken(token:string){
    if(!this.browser.isBrowser) return;
    localStorage.setItem('token',token);
  }

  setCurrentUser(user : LoginResponse | null){
    this._currentUser.set(user);
  }

  setAuthenticated(value:boolean){
    this._isAuthenticated.set(value);
  }

  saveUser(user : LoginResponse):void{
    if(!this.browser.isBrowser) return;
    localStorage.setItem('user',JSON.stringify(user));
  }

  getUser():LoginResponse | null{
    if(!this.browser.isBrowser) return null;
    const user = localStorage.getItem('user');
    return user? JSON.parse(user) : null;
  }


  getToken() :string | null{
    if(!this.browser.isBrowser) return null;
    const token = localStorage.getItem('token');
    return token? token : null;
  }


  logout(){
    if(!this.browser.isBrowser) return;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.setAuthenticated(false);
    this.setCurrentUser(null);
    
  }

  isLoggedIn():boolean{
    if (!this.browser.isBrowser) return false;
    return !!localStorage.getItem('token');
  }
}
