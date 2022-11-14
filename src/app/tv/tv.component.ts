import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TVComponent implements OnInit {
  TVS=[
    {
    id: 1,
    title: "TV1",
    price: 500,
    quantity: 30,
    },
    {
      id: 2,
      title: "TV2",
      price: 500,
      quantity: 30,
      },
      {
        id: 3,
        title: "TV1",
        price: 500,
        quantity: 30,
        },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
