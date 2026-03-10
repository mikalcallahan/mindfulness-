import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../shared/components/layout';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LayoutComponent],
  styleUrls: ['about.page.scss'],
  templateUrl: './about.page.html',
})
export default class AboutComponent {
  links = [
    {
      title: 'github',
      link: 'https://github.com/mikalcallahan',
    },
    {
      title: 'linkedin',
      link: 'https://www.linkedin.com/in/mikalcallahan/',
    },
    {
      title: 'x',
      link: 'https://x.com/mikalcallahan',
    },
  ];
}
