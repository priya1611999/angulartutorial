import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {
  constructor() {
    console.log("service is created");
  }


  getProductDetails(){

    return[ {
      productId:1,
      productName:"Laptop",
      productPrice:45000
    },  {
      productId:2,    
      productName:"Mobile",

      productPrice:25000
    },  {
      productId:3,    
      productName:"Tablet",   

      productPrice:15000
    }
  ];
  }
}
