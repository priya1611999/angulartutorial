import { Component } from '@angular/core';

@Component({
  selector: 'app-setgetvalue',
  imports: [],
  templateUrl: './setgetvalue.component.html',
  styleUrl: './setgetvalue.component.css'
})
export class SetgetvalueComponent {
   name=" ";
emailValue=" ";
  setvalueforname(event:Event){
    this.name=(event.target as HTMLInputElement).value;
  }

   setemail(emailValue:string){
    alert("saaj"+emailValue);
    this.emailValue=emailValue;
  }

  

}
