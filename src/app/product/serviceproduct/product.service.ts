import { Injectable } from '@angular/core';
import { ProductModule } from '../product.module';

@Injectable({
  providedIn:'root'
})
export class ProductService {

  constructor() { }
  showmsg(){
    console.log('ffff')
  }
}
