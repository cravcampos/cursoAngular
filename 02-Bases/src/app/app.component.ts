import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Hola mundo';
  public counter = 0;

  increaseBy(): void {
    this.counter += 1;
  }

  decreaseBy(): void{
    this.counter -= 1;
  }

  resetCounter(): void{
    this.counter = 0;
  }
}
