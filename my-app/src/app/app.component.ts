import { Component, signal } from '@angular/core';
import { ProductShowListcomponetComponent } from './product-show-listcomponet/product-show-listcomponet.component';
import { UserListcomponetComponent } from './user-listcomponet/user-listcomponet.component';

@Component({
  selector: 'app-root',

// imports:[ProductShowListcomponetComponent],
imports:[UserListcomponetComponent],

 templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class Appcomponent {

  userName="pallavi chaudhari";
 
}
