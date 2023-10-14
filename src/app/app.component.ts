import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, ThreeComponent } from './shared/components';

import '../styles.scss';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet, ThreeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'mindfulness-angular';
  hasWindow = false;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.hasWindow = true;
    }
  }
}
