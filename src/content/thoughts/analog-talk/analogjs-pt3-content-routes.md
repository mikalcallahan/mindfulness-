---
title: AnalogJS Pt3. Content Routes
slug: pt3
description: Content Routes
date: 2024-10-19
---

# AnalogJS Pt3. Content Routes (markdown routes)

Analog also supports using markdown content as routes, and rendering markdown content in components.

## Prerequisites

Update the `app.config.ts` with `provideContent` passing in the `withMarkdownRenderer` function.

```markup
// app.config.ts
import { provideContent, withMarkdownRenderer } from '@analogjs/content'

export const appConfig = {
 providers:[
  provideContent(withMarkdownRenderer())
 ]
}
```

and uncomment contents of `src/vite-env.d.ts`

## Defining a Content Route

The simplest way to define a content route is creating an `.md` file in the `pages/` folder

```markup
src/
|_ app/
 |_ pages/
  |- index.page.ts
  |- about.md (defines `/about`)
  └─ [...not-found].md (defines wildcard)
```

## Content Files

Markdown files can also be provided in the `src/content/` folder.
You can list markdown files such as help docs.

```markup
src/
|_ app/
 |_ pages/
 | |- index.page.ts
 | |- about.md
 | |- help/
 | └─ [...not-found].md
 └─ content/
  └─ help/
   |- lost-card.md defines `/help/lost-card`
   └─ activate-card.md defines `/help/activate-card`
```

```md
---
title: Lost Card
slug: lost-card
description: What to do in case of a lost card
---

## Lost Card

In case of lost card, lock your card in app and select "Lost or Stolen Card".

[Back to Help](./help)
```

To get a list of all content files, use `injectContentFiles<Attributes>()` which accepts an optional `filterFn`.

```ts
// src/app/pages/help/(help-messages).page.ts

import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { injectContentFiles } from "@analogjs/content";

export interface MessageAttributes {
  title: string;
  slug: string;
  description: string;
}

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <ul>
      @for (message of messages; track message.slug) {
        <li>
          <a [routerLink]="['/help', message.slug]">{{ message.attributes.title }}</a>
        </li>
      }
    </ul>
  `,
})
export default class HelpMessagesPage {
  readonly messages = injectContentFiles<MessageAttributes>((contentFile) => contentFile.filename.includes("/src/content/help/"));
}
```

![content-file-screen-1.png](content-file-screen-1.png)

We can then render the markdown file with frontmatter using the `injectContent()` function. By default `injectContent` uses the slug route parameter to get the content file or you can specify the content subdirectory.

```ts
// src/app/pages/help/[slug].page.ts
import { injectContent, MarkdownComponent } from "@analogjs/content";
import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { MessageAttributes } from "./(messages-list).page";

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
    param: "slug",
    subdirectory: "help",
  });
}
```

![content-file-screen-2.png](content-file-screen-2.png)

## Other features

Other features such as syntax highlighting with [PrismJS](https://analogjs.org/docs/features/routing/content#prismjs-syntax-highlighting) or [Shiki](https://analogjs.org/docs/features/routing/content#shiki-syntax-highlighting) are available.
