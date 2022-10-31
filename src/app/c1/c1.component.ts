import { Component, OnInit } from '@angular/core';
import { FirstserviceService } from '../service/firstservice.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css'],
  providers:[FirstserviceService]
})
export class C1Component implements OnInit {

  constructor(private s:FirstserviceService) { }

  ngOnInit(): void {
    
  }
 addtotab(){
  this.s.addtab('c2');
  
 }
}
