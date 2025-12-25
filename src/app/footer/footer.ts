import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  exportAs: 'footer'
})
export class Footer {
year = new Date().getFullYear();
}
