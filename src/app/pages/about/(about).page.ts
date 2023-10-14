import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['about.page.scss'],
  templateUrl: './about.page.html',
})
export default class AboutComponent {
  links = [
    {
      icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      link: 'https://www.github.com/mikalcallahan',
      title: 'github',
    },
    {
      icon: 'https://webring.xxiivv.com/icon.black.svg',
      link: 'https://webring.xxiivv.com/', // TODO: add id to url
      title: 'XXIIVV webring',
    },
    {
      icon: '/icons/brands/x/logo-black.png',
      link: 'https://www.x.com/mikalcallahan',
      title: 'x (fka twitter)',
    },
  ];
}
