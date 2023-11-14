import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, ThreeComponent } from './shared/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, ThreeComponent],
  templateUrl: './app.component.html',
  // template: ` <router-outlet></router-outlet> `,
  /*
  styles: [
    `
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
    `,
  ],
  */
})
export class AppComponent {}
