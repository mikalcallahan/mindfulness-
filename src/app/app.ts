import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ThreeComponent } from './shared/components/three/three.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, NavbarComponent, ThreeComponent],
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
export class App {}
