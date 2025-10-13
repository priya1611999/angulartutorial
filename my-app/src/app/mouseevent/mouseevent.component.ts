import { Component } from '@angular/core';

@Component({
  selector: 'app-mouseevent',
  imports: [],
  templateUrl: './mouseevent.component.html',
  styleUrl: './mouseevent.component.css'
})
export class MouseeventComponent {


  handleEvent(event:MouseEvent){
    alert("event type is"+event.type)
  }

 handleEventInput(event:Event){
    alert("event input type is"+event.type)
  }
  
}
