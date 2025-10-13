import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-routehomecomponet',
  imports: [RouterLink],
  templateUrl: './routehomecomponet.component.html',
  styleUrl: './routehomecomponet.component.css'
})
export class RoutehomecomponetComponent {

  constructor(private router: Router) {}  
  gotoprofile() {
// 2. route click with data pass 
    this.router.navigate(['profile'],{ queryParams: { name: 'priya' } });
  }

  gotoprofileprofilecommon() {
// 1. route click with data pass to common profile component  
    this.router.navigate(['profilecommon'],{ queryParams: { name: 'priya' } });     
  }
}
