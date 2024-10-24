---
id: AnalogJS Pt4. API Routes
aliases: []
tags:
  - analogjs
  - talks
  - blog
  - thoughts
title: AnalogJS Pt4. API Routes
slug: pt4
description: API Routes
date: 2024-10-24
---

# AnalogJS Pt4. API Routes

## Defining API Routes

Analog supports defining API routes that can be used to serve data to the application. API routes are defined in the `src/server/routes` folder
API routes are also filesystem based, and are exposed under the default `/api` prefix in development

`src/server/routes/v1/hello.ts` creates API endpoint `/api/v1/hello`

```typescript
// /src/server/routes/v1/hello.ts
import { defineEventHandler } from "h3";

export default defineEventHandler(() => ({ message: "Hello World" }));
```

The API prefix can is customizable.

```typescript
// vite.config.ts
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      analog({
        apiPrefix: "services",
      }),
    ],
  };
});
```

which will define the API at `/services/v1/hello`

## Dynamic Routes

Dynamic API routes are defined by using the filename as the route path enclosed in square brackets. Parameters can be accessed via `event.context.params`

```typescript
// /server/routes/v1/hello/[name].ts
import { defineEventHandler } from "h3";

export default defineEventHandler((event) => `Hello ${event.context.params?.["name"]}!`);
```

or with `getRouterParam`

```typescript
// /server/routes/v1/hello/[name].ts
import { defineEventHanlder, getRouterParam } from "h3";

export default defineEventHandler((event) => {
  const name = getRouterParam(event, "name");
  return `Hello, ${name}!`;
});
```

## HTTP Requests

File names can be suffixed with `.get`, `.post`, `.put`, `.delete`, etc. to match the specific HTTP request method. If no errors are thrown, a status code of `200 OK` will be returned. Any uncaught errors will return a `500 Internal Server Error`. To return other error codes, throw an exception with `createError`.

Use `readBody` for `POST` body and `getQuery` for query params

```typescript
// /server/routes/v1/transactions/[id].get.ts
import { createError, defineEventHandler, getRouterParam } from "h3";
import { Transaction } from "src/app/core/types";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!idIsValid(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID invalid",
    });
  }

  // @NOTE: here we are simulating a db call
  const transaction = getTransactionById(id);
  return transaction;
});
```

## Server Side Data Fetching

Analog supports fetching data from the server before loading a page. To fetch the data from the server, create a `.server.ts` file that contains the async load function alongside the `.page.ts` file.

```markup
src/
└── app/
    └── pages/
        ├── index.page.ts
        └── index.server.ts
```

### Prerequisites

Analog automatically infers the public base URL to be set when using the server-side data fetching through its Server Request Context and Request Context Interceptor. To explicitly set the base URL, set an environment variable, using a `.env` file to define the public base URL.

```markup
// .env
VITE_ANALOG_PUBLIC_BASE_URL="http://localhost:5173"`
```

### Fetching Data

Fetch the data with

```typescript
// src/app/pages/index.server.ts
import { PageServerLoad } from "@analogjs/router";

export const load = async ({
  params, // params/queryParams from the request
  req, // H3 Request
  res, // H3 Response handler
  fetch, // internal fetch for direct API calls,
  event, // full request event
}: PageServerLoad) => {
  return {
    loaded: true,
  };
};
```

Access the data with `injectLoad`

```typescript
// /src/app/pages/index.page.ts
import { Component } from '@angular/core'
import { toSignal } from "@angular/core/rxjs-interop"
import { injectLoad } from '@analogjs/router'

import { load } from './index.server'

@Component ({
  standalone: true,
  template:`
    <h2>Dashboard</h2>
    Loaded: {{ data(). loaded }}
  `
})
export default class DashboardComponent {
  data = toSignal(injectLoad<typeof load>(), requireSync: true })
}
```

Accessing the data can also be done with Component Inputs and Component Input Bindings provided in the Angular Router configuration.

Update `app.config.ts` with `provideFileRouter(withComponentInputBinding())`

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(withComponentInputBinding()),
    // other providers
  ],
};
```

```typescript
// /src/app/pages/index.page.ts
import { Component } from "@angular/core";
import { LoadResult } from "@analogjs/router";

import { load } from "./index.server";

@Component({
  standalone: true,
  template: `
    <h2>Dashboard</h2>

    Loaded: {{ data().loaded }}
  `,
})
export default class DashboardComponent {
  @Input() load(data: LoadResult<typeof load>) {
    this.data = data;
  }
  data!: LoadResult<typeof load>;
}
```

[AnalogJS Pt3. Content Routes](./thoughts/analog-talk/pt3)

<!-- [[AnalogJS Pt5. SSR and SSG]] -->
