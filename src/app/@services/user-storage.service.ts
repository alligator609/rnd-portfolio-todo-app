import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { User } from '../@models/user.interface';

export interface StoredUser {
  uid: string;
  email: string;
  name?: string;
  phone?: string;
  role?: string;
}

const USER_STORAGE_KEY = 'app_user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  saveUser(user: User): void {
    if (!this.isBrowser) return;
    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } catch (e) {
      console.error('Failed to save user to localStorage', e);
    }
  }

  getUser(): StoredUser | null {
    if (!this.isBrowser) return null;
    try {
      const raw = localStorage.getItem(USER_STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw) as StoredUser;
    } catch (e) {
      console.error('Failed to read user from localStorage', e);
      return null;
    }
  }

  clearUser(): void {
    if (!this.isBrowser) return;
    try {
      localStorage.removeItem(USER_STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear user from localStorage', e);
    }
  }

  isLoggedIn():boolean{
    const user  = this.getUser();
    return user && user.uid ? true : false;
  }
}
