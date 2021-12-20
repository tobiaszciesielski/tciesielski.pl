---
title: 'Angular Learning'
date: '20-12-2021'
excerpt: 'Wstęp do angulara'
author: 'Tobiasz Ciesielski'
category: 'Angular'
---

# Angular Learning

**Components** - Angular is component based framework. It uses @Component decorator statement to create one.

```jsx
@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
    `,
})
```

`selector` is a css selector that defines how component appear. To use it, in template just write:

```jsx
<hello-world></hello-world>
```

`template` tells angular how component should be rendered in dom.

We can inject variables in this templates. To do that we just surround this variable with double curly braces:

```jsx
<p>{{ myVariable }}</p>
```

**Property bindings** can set component properties from html level.

```jsx
<p [id]="sayHelloId" [style.color]="fontColor">Set my color</p>
```

**Two way property bindings** sets two properties in one time. It bindes event and property.

```jsx
// Instead of
<app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></app-sizer>
// we write
<app-sizer [(size)]="fontSizePx"></app-sizer>
```

**Event listeners** can be set also from html level.

```jsx
<button (click)="sayMessage()" [disabled]="canClick">Trigger alert message</button>
```

We just need to declare that variables in component class body

**View encapsulation** is for component styles. Angular makes unique styles for each component. It is for encapsulation (makes styles private for component)

**Bindings properties in TS classes** is some sort of syntactic sugar.

```jsx
// Instead of
constructor(myService: MyService) {
	this.myService = myService;
}

// We can write
constructor(private myService: MyService) {}

// it does the same thing.
```

**Observables -**

**Dependency Injection -**

**Injectable -**

**Immutable state -**

**Mutable state -**

RENDERER 2

### [ng-template vs ng-container (with ngTemplateOutlet )](https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/)

TODO
[https://juristr.com/](https://juristr.com/)

[https://egghead.io/lessons/angular-optimize-angular-s-change-detection](https://egghead.io/lessons/angular-optimize-angular-s-change-detection)

[https://frontendmasters.com/courses/angular-9/](https://frontendmasters.com/courses/angular-9/)

[https://www.youtube.com/watch?v=sYo9rla8Cz8](https://www.youtube.com/watch?v=sYo9rla8Cz8)
