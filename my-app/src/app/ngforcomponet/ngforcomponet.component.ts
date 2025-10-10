import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngforcomponet',
  imports: [NgFor],
  templateUrl: './ngforcomponet.component.html',
  styleUrl: './ngforcomponet.component.css'
})
export class NgforcomponetComponent {

  listOfNames = ['Anil', 'Sunil', 'Kiran', 'Ravi', 'Ramesh', 'Suresh', 'Naresh'];

  studentList = [
    { name: 'Anil', age: 22, course: 'B.Tech' },
    { name: 'Sunil', age: 23, course: 'B.Sc' },
    { name: 'Kiran', age: 21, course: 'B.Com' },
    { name: 'Ravi', age: 24, course: 'B.A' },
    { name: 'Ramesh', age: 22, course: 'BBA' },
    { name: 'Suresh', age: 23, course: 'BCA' },
    { name: 'Naresh', age: 21, course: 'B.Tech' }
  ];

}
