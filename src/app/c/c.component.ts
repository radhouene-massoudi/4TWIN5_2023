import { Component, OnInit } from '@angular/core';
import { FirstserviceService } from '../service/firstservice.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  constructor(private s:FirstserviceService) { }

  ngOnInit(): void {
      this.s.fetchStudent().subscribe(
    
    (d)=>{
      console.log('test')
      console.log(d);
    },
    (err)=>{
      console.log(err)
    }
   );

  }

}
