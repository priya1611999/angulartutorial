import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-childcomponet',
  imports: [],
  templateUrl: './user-childcomponet.component.html',
  styleUrl: './user-childcomponet.component.css'
})
export class UserChildcomponetComponent {

  @Input() user:string=''
}
