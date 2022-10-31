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
    console.log(this.s.fetchNbInList(this.s.list,'firstName','George'));
   this.s.fetchStudent().subscribe(
    (d)=>{
      console.log(d);
    },
    (err)=>{
      console.log(err)
    }
   );

  }

}
