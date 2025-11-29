import { Injectable } from '@angular/core';
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
  saveUser(user: User): void {
    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } catch (e) {
      console.error('Failed to save user to localStorage', e);
    }
  }

  getUser(): StoredUser | null {
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
