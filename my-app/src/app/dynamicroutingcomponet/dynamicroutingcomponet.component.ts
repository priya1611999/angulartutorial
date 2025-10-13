import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dynamicroutingcomponet',
  imports: [RouterLink],
  templateUrl: './dynamicroutingcomponet.component.html',
  styleUrl: './dynamicroutingcomponet.component.css'
})
export class DynamicroutingcomponetComponent {


  userList=[{name:'John',age:25,city:'New York'},
  {name:'Alice',age:30,city:'Los Angeles'},
  {name:'Bob',age:22,city:'Chicago'},
  {name:'Eve',age:28,city:'Miami'}]
}
