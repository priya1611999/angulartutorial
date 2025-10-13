import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effectcode',
  imports: [],
  templateUrl: './effectcode.component.html',
  styleUrl: './effectcode.component.css'
})
export class EffectcodeComponent {
  userName=signal('priya');
constructor() {
  effect(() => {
      console.log('User Name changed:', this.userName());
  });
}
}
