import { Component, signal } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { customecomponent } from './customcomponent/custom.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MouseeventComponent } from './mouseevent/mouseevent.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent,customecomponent,CalculatorComponent,MouseeventComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class Appcomponent {
 
}
