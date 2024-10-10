import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MessageAttributes } from './(contents).page';

@Component({
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe],
  template: `
    @if (message$ | async; as message) {
      <ng-container>
        <analog-markdown [content]="message.content" />
      </ng-container>
    }
  `,
})
export default class MessagePage {
  readonly message$ = injectContent<MessageAttributes>({
    param: 'slug',
    subdirectory: 'thoughts/analog-talk',
  });
}
