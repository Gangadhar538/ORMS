import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  constructor() { }
  isLoggedIn = false;

  login(status: boolean) {
    this.isLoggedIn = status;
  }

  logout() {
    this.isLoggedIn = false;
  }
  isAuthenticated()
  {
    return this.isLoggedIn;
  }
}
