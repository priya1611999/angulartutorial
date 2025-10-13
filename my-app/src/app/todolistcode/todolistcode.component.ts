import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolistcode',
  imports: [FormsModule],
  templateUrl: './todolistcode.component.html',
  styleUrl: './todolistcode.component.css'
})
export class TodolistcodeComponent {

  taskName = '';
  tasksList: {id:number,task:string}[]=[];

  addTask() {
    {
      this.tasksList.push({id:this.tasksList.length+1,task:this.taskName});
      this.taskName='';
    }

 

}

 removeTask(id: number) {
    this.tasksList = this.tasksList.filter(task => task.id !== id);
  }
}
