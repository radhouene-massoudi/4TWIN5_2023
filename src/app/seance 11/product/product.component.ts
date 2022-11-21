import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  listProdcut=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ];
  constructor() { }
  
  ngOnInit(): void {
  }
  increaseLike(t:any){
    let index=this.listProdcut.indexOf(t);
    if(index!=-1){
      this.listProdcut[index].like++
    }

  }

}
