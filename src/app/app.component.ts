import { Component } from '@angular/core';
import { Shared } from './shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Shared],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mindfulness-angular';
}
