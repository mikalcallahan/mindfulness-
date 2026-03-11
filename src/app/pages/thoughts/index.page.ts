import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../shared/';
@Component({
  selector: 'app-thoughts',
  imports: [CommonModule, LayoutComponent],
  template: `
    <app-layout
      header="A collection of mostly shortform thoughts"
    >
  <ul>
    <li class="link">
      <h5>
        <a href="/thoughts/analog-talk">analog-talk</a>
      </h5>
    </li>
    <li class="link">
      <h5>
        <a href="/thoughts/on-stillness">on-stillness</a>
      </h5>
    </li>
    <li class="link">
      <h5>
        <a href="/thoughts/de-tristesse">de-tristesse</a>
      </h5>
    </li>
  </ul>

</app-layout>
`,
})
export default class ThoughtsComponent {
}
