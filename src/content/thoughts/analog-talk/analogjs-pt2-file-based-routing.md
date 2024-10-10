---
title: AnalogJS Pt2. File Based Routing
slug: pt2
description: File Based Routing
date: 2024-10-10
---

# AnalogJS Pt2. File Based Routing

2024-10-10

## Index Routes

Index routes use the filename to define the route. Either with `index.page.ts` or
filename as the route path enclosed in parenthesis `(dashboard).page.ts`.

```markup
src/
|_ app/
 |_ pages/
  |- index.page.ts defines '/'
  └─ (dashboard).page.ts defines `/` (alternative)
```

<br>

## Static Routes

Static routes are defined by using the filename as the route path.
e.g. `/pages/payments.page.ts` defines `/payments`

We can also define `/payments` with:

- `/pages/payments/index.page.ts`
- `/pages/payments/(payments).page.ts`

```markup
src/
|_ app/
  |_ pages/
    |- index.page.ts defines '/'
    |- (dashboard).page.ts defines `/` (alternative)
    |- payments.page.ts defines `/payments`
    |_ payments/
    |-index.page.ts defines `/payments` (alt)
    └─ (payments).page.ts defines `/payments` (alt)
```

<br>

## Nesting Static Routes

You can nest route files in folder.
e.g. `/pages/payments/make-payments.page.ts`

or with dot notation e.g. `/pages/payments.make-payment.page.ts`

```markup
src/
|_ app/
 |_ pages/
  |- index.page.ts
  |- payments.make-payment.page.ts defines `/payments/make-payment`
  |_ payments/
   |-index.page.ts defines `/payments`
   |_ make-payment.page.ts defines `/payments/make-payment` (alt)
```

<br>

## Route Groups

Routes can be grouped together in the same folder without adding a route path
segment by wrapping a folder name in parenthesis.

e.g. `/pages/(auth)/login.page.ts` defines `/login`

```markup
src/
|_ app/
 |_ pages/
  |- index.page.ts
  |_ (auth)/
   |- login.page.ts defines `/login`
   |_ signup.page.ts defines `/signup`
```

<br>

## Dynamic Routes

Dynamic routes are defined by using the filename as the route path enclosed
in square brackets. The parameter for the route is extracted from the route path.

`pages/payments/[paymentId].page.ts` defines `/payments/:paymentId`

```ts
// pages/payments/[paymentId].page.ts
import { component, inject } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";

@Component({
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h2>Payment Details</h2>
    ID: {{ paymentId$ | async }}
  `,
})
export default class PaymentDetailsPage {
  private readonly route = inejct(ActivatedRoute);
  readonly paymentId$ = this.route.paramMap.pipe(map((params) => params.get("paymentId")));
}
```

Can also be accessed as an input

```ts
// pages/payments/[paymentId].page.ts
import { component, input } from
 standalone: true,
 template: `
   <h2>Payment Details</h2>
   ID: {{ paymentId }}
  `
 export default class PaymentDetailsPage {
  @Input() paymentId: string | null = null;
 }
```

first we need to update our AppConfig

```ts
// src/app/app.config.ts

export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(withComponentInputBinding()),
    // other providers
  ],
};
```

So we have:

```markup
src/
|_ app/
 |_ pages/
  |- index.page.ts
  |_ payments/
   |- (payments-list).page.ts
   |_ [paymentId].page.ts defines `/payments/:paymentId`
```

<br>

## Layout Routes

Layout routes are defined using a parent file and child folder with the same name.

```markup
src/
|_ app/
 |_ pages/
  |- index.page.ts
  |- payments.page.ts
  |_ payments/
   |- (payments-list).page.ts
   |_ [paymentId].page.ts
```

```ts
import { component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2>Payments</h2>
    <router-outlet></router-outlet>
  `,
})
export default class PaymentsPage {}
```

This also works with pathless layout routes.

```markup
src/
|_ app/
 |_ pages/
  |- index.page.ts
  |- (auth).page.ts
  |_ (auth)/
   |- login.page.ts
   |_ signup.page.ts
```

<br>

## Catch All Routes

Catch-all routes are defined by using the filename as the route path prefixed
with 3 periods enclosed in square brackets.

`pages/[...not-found].page.ts` defines a wildcard route.

```markup
src/
|_ app/
 |_ pages/
  |- index.page.ts
  |_ [...not-found].page.ts
```

All together we may have something like this

```markup
src/
|_ app/
 |_ pages/
    |- index.page.ts
    |- payments.page.ts
    |- (auth)/
    |   |- login.page.ts
    |   └─ signup.page.ts
    |- payments/
    |   |- (payments-list).page.ts
    |   |- [paymentId].page.ts
    |   └─ make-payment.page.ts
    └─ [...not-found].page.ts
```

<br>

## Route Metadata

Route metadata can be defined. See [Route Metadata](https://analogjs.org/docs/features/routing/metadata#defining-route-metadata)

[back to pt1.](./thoughts/analog-talk/pt1)

<!-- [AnalogJS Pt3. Content Routes](./thoughts/analog-talk/pt2) -->
