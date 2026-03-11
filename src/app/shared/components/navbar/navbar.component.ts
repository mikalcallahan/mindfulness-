import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div id="list-container">
      <ul id="nav-list">
        <li class="link">
          <h5 [routerLink]="['/']"><a>Mikal Callahan</a></h5>
        </li>
        <li id="links">
          <ul>
            <li class="link">
              <h5 [routerLink]="['/about']" routerLinkActive="active">
                <a>about</a>
              </h5>
            </li>
            <li class="link">
              <h5 [routerLink]="['/projects']" routerLinkActive="active">
                <a>projects</a>
              </h5>
            </li>
            <li class="link">
              <h5 [routerLink]="['/thoughts']" routerLinkActive="active">
                <a>thoughts</a>
              </h5>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      #list-container .link.logo {
        cursor: initial;
      }

      #nav-list {
        display: flex;
        justify-content: center;
        list-style-type: none;
        padding: 0 2rem;
      }

      @media (max-width: 430px) {
        #nav-list {
          display: block;
        }
      }

      #nav-list #links li {
        padding-left: 0;
      }

      #nav-list > li > ul {
        display: flex;
        list-style-type: none;
      }

      #nav-list > li > ul > li {
        padding: 0 0.5rem;
      }
    `,
  ],
})
export class NavbarComponent {}
