import {Component} from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<h1>Hello World</h1>
Counter: {{counter}}<br>
<button (click)="counter = counter - 1" [disabled]="counter <= 0">
    Less
</button>
<button (click)="increment()">
    More
</button>`,
})
export class App {
  counter: number = 0;

  increment() {
    this.counter++;
  }
}