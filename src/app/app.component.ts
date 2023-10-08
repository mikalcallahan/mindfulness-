import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, ThreeComponent } from './shared/components';

import '../styles.scss';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, ThreeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'mindfulness-angular';
}
