import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../@services/auth.service';
import { UserStorageService } from '../@services/user-storage.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
  exportAs: 'navbar'
})
export class Nav {

  isLoggedIn = false; 
  constructor(private authService: AuthService,
    private userStorage: UserStorageService
  ) {
    this.isLoggedIn = this.userStorage.isLoggedIn()  }

  logout() {
    this.authService.logout();
  }
}
