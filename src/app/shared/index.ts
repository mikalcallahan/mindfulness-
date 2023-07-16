import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent, ThreeComponent } from './components';

const DefaultModules = [CommonModule, RouterModule];
const Components = [NavbarComponent, ThreeComponent];

export const Shared = [...DefaultModules, ...Components];
