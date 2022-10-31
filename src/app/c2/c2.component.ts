import { Component, OnInit } from '@angular/core';
import { FirstserviceService } from '../service/firstservice.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(private s:FirstserviceService) { }

  ngOnInit(): void {
   // this.s.showMsg();
  
  }
  
}
