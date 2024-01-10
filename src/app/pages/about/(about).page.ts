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
      title: 'twitter',
      link: 'https://twitter.com/mikalcallahan',
    },
    {
      title: 'webring',
      link: 'https://webring.xxiivv.com',
    },
  ];
}
