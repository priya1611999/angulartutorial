import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-validation-formcomponet',
  imports: [FormsModule, NgIf],
  templateUrl: './template-driven-validation-formcomponet.component.html',
  styleUrls: ['./template-driven-validation-formcomponet.component.css'] // <-- Corrected property name
})
export class TemplateDrivenValidationFormcomponetComponent {
  userData: any;

  onSubmit(val: any) {
    console.log(val);
    this.userData = val;
  }
}