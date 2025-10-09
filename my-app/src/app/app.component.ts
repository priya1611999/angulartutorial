import { Component, signal } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { customecomponent } from './customcomponent/custom.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MouseeventComponent } from './mouseevent/mouseevent.component';
import { ForloopcodeComponent } from './forloopcode/forloopcode.component';
import { SignalcodeComponent } from './signalcode/signalcode.component';

@Component({
  selector: 'app-root',
 // imports: [LoginComponent,customecomponent,CalculatorComponent,MouseeventComponent,SetgetvalueComponent,IfelseconditionsComponent],
//  imports:[IfelseconditionsComponent],
imports:[ForloopcodeComponent,SignalcodeComponent],
 templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class Appcomponent {
 
}
