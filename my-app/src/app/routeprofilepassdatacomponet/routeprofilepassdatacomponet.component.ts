import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routeprofilepassdatacomponet',
  imports: [],
  templateUrl: './routeprofilepassdatacomponet.component.html',
  styleUrl: './routeprofilepassdatacomponet.component.css'
})
export class RouteprofilepassdatacomponetComponent {

  name:string|null= "";
  constructor(private activeroute: ActivatedRoute) {}
  ngOnInit() {
//1.only for route link code
    //  this.name = this.activeroute.snapshot.paramMap.get('name') ?? "";
    // console.log(this.name);

    //on click button for programmatically navigation
//2. for route click with data pass
    // this.activeroute.queryParams.subscribe((params)=>{
    //   this.name = params['name'];
    //   console.log("name is"+this.name);
    // });
//3. for need to pass common data to multiple component
    this.activeroute.data.subscribe((data)=>{
      this.name = data['name'];

    });

  }}
