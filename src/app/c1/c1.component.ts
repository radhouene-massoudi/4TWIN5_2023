import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { C2Component } from '../c2/c2.component';
import { FirstserviceService } from '../service/firstservice.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css'],
  providers:[FirstserviceService]
})
export class C1Component implements OnInit,AfterViewInit {

@ViewChild(C2Component) 
private exempleComponent !: C2Component;
  constructor(private s:FirstserviceService) { }

  ngOnInit(): void {
 
  }
 addtotab(){
 
  this.s.addtab('c2');
  
 }
 ngAfterViewInit(): void {

  console.log(this.exempleComponent.isAdmin) 
 }
}
