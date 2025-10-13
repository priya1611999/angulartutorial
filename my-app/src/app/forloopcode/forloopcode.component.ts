import { Component } from '@angular/core';

@Component({
  selector: 'app-forloopcode',
  imports: [],
  templateUrl: './forloopcode.component.html',
  styleUrl: './forloopcode.component.css'
})
export class ForloopcodeComponent {
userList=['Anil','Sunil','Kiran','Ravi','Ramesh'];

studentList=[{name:'John', age:20}, {name:'Jane', age:22}, {name:'Jim', age:21}];
getName(name:string){
  console.log(name)
}
}
