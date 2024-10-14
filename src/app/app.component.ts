import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, ThreeComponent } from './shared/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, ThreeComponent],
  template: `
    @defer (on immediate) {
      <navbar />
      <div class="content">
        <router-outlet></router-outlet>
      </div>
      <app-three />
    } @placeholder {
      <div></div>
    }
  `,
})
export class AppComponent {}
