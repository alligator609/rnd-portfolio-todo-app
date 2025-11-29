import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { UserStorageService } from './user-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private userStorage: UserStorageService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    const user = this.userStorage.getUser();

    if (user && user.uid) {
      // User is logged in, allow access
      return true;
    }

    // Not logged in: redirect to login
    this.userStorage.clearUser();
    return this.router.parseUrl('/auth/login');
  }
}
