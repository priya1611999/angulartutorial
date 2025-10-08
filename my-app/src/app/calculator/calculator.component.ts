import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  count:number=0;

  increment(){
    this.count=this.count+1;
  }

   decrement(){
    this.count=this.count-1;
  }

  reset(){
    this.count=0;
  }

   handleAllopertaions(value:string){
    if(value=='minus'){
    this.count=this.count+1;

    }else if(value=='plus'){
    this.count=this.count-1;

    }else{
    this.count=0;
    }
  }
}
