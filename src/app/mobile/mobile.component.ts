import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  TVS=[
    {
    id: 1,
    title: "mobile1",
    price: 500,
    quantity: 30,
    },
    {
      id: 2,
      title: "mobile2",
      price: 500,
      quantity: 30,
      },
      {
        id: 3,
        title: "mobile1",
        price: 500,
        quantity: 30,
        },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
