import { Component, input } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  template: `
    <div class="layout-container">
      <h1>{{ header() }}</h1>
      <ng-content />
    </div>
  `,
})
export class LayoutComponent {
  header = input('');
}
