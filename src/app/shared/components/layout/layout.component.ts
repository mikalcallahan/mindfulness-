import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  template: ` <div>
    <h1>{{ header }}</h1>
    <ng-content></ng-content>
  </div>`,
})
export class LayoutComponent {
  @Input() header: string = '';
}
