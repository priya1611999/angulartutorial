import { Component } from '@angular/core';
import { ProductService } from '../services/product-service';
import { User } from '../interface/User';

@Component({
  selector: 'app-user-listcomponet',
  imports: [],
  templateUrl: './user-listcomponet.component.html',
  styleUrl: './user-listcomponet.component.css'
})
export class UserListcomponetComponent {

  constructor(private productService: ProductService  ) { }

  userList:User[]=[];
ngOnInit(): void {
  this.productService.getUserList().subscribe((data: User[]) => {
    this.userList = data;
    console.log(this.userList);
  });
}

}
