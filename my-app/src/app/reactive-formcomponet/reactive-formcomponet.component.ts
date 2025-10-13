import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-formcomponet',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './reactive-formcomponet.component.html',
  styleUrl: './reactive-formcomponet.component.css'
})
export class ReactiveFormcomponetComponent {
// name=new FormControl();
// password=new FormControl();

// display(){
//   alert("Name: "+this.name.value+" Password: "+this.password.value);    
// }


//for form group
loginform=new FormGroup({
  name:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required,Validators.minLength(5)]) 
});

displayFormGroup(){
  const value = this.loginform.value;
  if (value) {
    alert("Name: " + value.name + " Password: " + value.password);
  } else {
    alert("Form data is not available.");
  }
} 


setValue(){
  this.loginform.setValue({
    name:'admin',
    password:'admin123'
  });   
}

get name(){   
  return this.loginform.get('name');
}

get password(){   
  return this.loginform.get('password');  
}
} 