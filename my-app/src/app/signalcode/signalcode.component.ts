import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { Writable } from 'stream';

@Component({
  selector: 'app-signalcode',
  imports: [],
  templateUrl: './signalcode.component.html',
  styleUrl: './signalcode.component.css'
})
export class SignalcodeComponent {
count=signal<number|string>(10);
x=0;
data: WritableSignal<number|string>=signal(20);
data1:Signal<number|string>=computed(()=>200);
constructor() {
  effect(() => {
    console.log('Count changed:', this.count());
  });
}

updateValueOfX() {
  //limited access for update method
  // this.data.update(value => {
  //   return (value as number) + 10;
  // });
  this.data.set(30);
  // this.data1.set(40); not able to update computed
  this.x=30;
}
}
