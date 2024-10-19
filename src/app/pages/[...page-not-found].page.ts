import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `This page does not exist.`,
})
export default class PageNotFoundComponent {}

