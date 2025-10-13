import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/User';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
constructor(private http:HttpClient) { }

getProductsList(){
  return this.http.get('https://fakestoreapi.com/products');  
}

getUserList():Observable<User[]>{
  return this.http.get<User[]>('http://localhost:8080/getUserList');
}


}
