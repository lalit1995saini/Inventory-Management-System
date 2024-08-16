import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn: boolean = false;

  login(code: string) {
    this.isLoggedIn = code === "123456";
  }

  logout() {
    this.isLoggedIn = false;
  }

}
