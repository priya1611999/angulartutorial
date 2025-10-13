import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name:string="priya";
  address:string|number="startupSnapshot";//property
logincheck()
{
  alert("hi priya"+this.name);
  this.address=123;//variable
  this.logincheck2();
}

logincheck2()
{
  alert("hi logincheck2");
}
sum(a:number,b:number)
{
  alert(a+b);
}
}
