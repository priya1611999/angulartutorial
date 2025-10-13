import { Component } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'app-service-codecomponet',
  imports: [],
  templateUrl: './service-codecomponet.component.html',
  styleUrl: './service-codecomponet.component.css'
})
export class ServiceCodecomponetComponent {


  productData: {
    name: string;
    price: number;
    id: number;
  }[] | undefined;
  constructor(private product : Product) {
    console.log("service is called in component");

    this.getProductDetails();
   }



getProductDetails(): any {

   console.log("data is"+JSON.stringify(this.product.getProductDetails()));
}
}
