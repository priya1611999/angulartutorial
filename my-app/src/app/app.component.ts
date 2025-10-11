import { Component, signal } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { customecomponent } from './customcomponent/custom.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MouseeventComponent } from './mouseevent/mouseevent.component';
import { ForloopcodeComponent } from './forloopcode/forloopcode.component';
import { SignalcodeComponent } from './signalcode/signalcode.component';
import { EffectcodeComponent } from './effectcode/effectcode.component';
import { ForloopcontextualvariablesComponent } from './forloopcontextualvariables/forloopcontextualvariables.component';
import { NgmodelcodeComponent } from './ngmodelcode/ngmodelcode.component';
import { TodolistcodeComponent } from './todolistcode/todolistcode.component';
import { DynamicstylecodeComponent } from './dynamicstylecode/dynamicstylecode.component';
import { ComponetdirectivecodeComponent  } from './componetdirectivecode/componetdirectivecode.component';
import { NgforcomponetComponent } from './ngforcomponet/ngforcomponet.component';
import { NgswitchcomponetComponent } from './ngswitchcomponet/ngswitchcomponet.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouteheadercomponetComponent } from './routeheadercomponet/routeheadercomponet.component';
import { DynamicroutingcomponetComponent } from './dynamicroutingcomponet/dynamicroutingcomponet.component';
import { ReactiveFormcomponetComponent } from './reactive-formcomponet/reactive-formcomponet.component';

@Component({
  selector: 'app-root',
 // imports: [LoginComponent,customecomponent,CalculatorComponent,MouseeventComponent,SetgetvalueComponent,IfelseconditionsComponent],
//  imports:[IfelseconditionsComponent],
// imports:[ForloopcodeComponent,SignalcodeComponent],
// imports:[EffectcodeComponent],
// imports:[ForloopcontextualvariablesComponent],
// imports:[NgmodelcodeComponent],
// imports:[TodolistcodeComponent],
// imports:[DynamicstylecodeComponent],
// imports:[ComponetdirectivecodeComponent],
// imports:[NgforcomponetComponent],
// imports:[RouterLink,RouterOutlet],
  // imports: [ RouterOutlet, RouteheadercomponetComponent],
  // imports: [ RouterOutlet, DynamicroutingcomponetComponent],
imports:[RouterOutlet,ReactiveFormcomponetComponent],

 templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class Appcomponent {
 
}
