import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitchcomponet',
  imports: [NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './ngswitchcomponet.component.html',
  styleUrl: './ngswitchcomponet.component.css'
})
export class NgswitchcomponetComponent {
colorvar='red';
}
