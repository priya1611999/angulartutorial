import { Component } from '@angular/core';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-show-listcomponet',
  imports: [],
  templateUrl: './product-show-listcomponet.component.html',
  styleUrl: './product-show-listcomponet.component.css'
})
export class ProductShowListcomponetComponent {

  constructor(private productService: ProductService  ) { }

  productList:any;
  ngOnInit(): void {
    this.productService.getProductsList().subscribe((data)=>{
      console.log(data);

      this.productList=data;
    });     
}
}