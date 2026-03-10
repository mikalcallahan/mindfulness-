import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';

export interface MessageAttributes {
  title: string;
  slug: string;
  description: string;
  date: string;
}

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="analog-markdown">
      <h1>AnalogJS Talk</h1>
      <p>
        Given April 25, 2024 at
        <a
          href="https://www.meetup.com/typescript-montreal/events/299070954/"
          alt="typescript montreal"
          target="_blank"
          >Typescript Montreal</a
        >
      </p>
      <ul>
        @for (message of messages; track message.slug) {
          <li>
            <a [routerLink]="['/thoughts/analog-talk', message.slug]">{{
              message.attributes.title
            }}</a>
          </li>
        }
      </ul>
    </div>
  `,
})
export default class AnalogTalkContentsPage {
  readonly messages = injectContentFiles<MessageAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/thoughts/analog-talk/'),
  );
}
