import { Injectable, Input } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class AddcartService{
  addToCarts:Product[]=[];
  storage = window.localStorage;

  constructor() { }
 
  addToCart(pro:Product){
  
   
    let exist = this.addToCarts.find(item => item.id==pro.id);
     if(exist){
      alert('already added');
     }
     else
 {   this.addToCarts.push(pro);
}
    return this.addToCarts;
  }
  getToCart(){
    return this.addToCarts;
  }
 /*
   addProduct(product: Product[]): void {
    this.storage.setItem('products', JSON.stringify(product));
  }
 */
getcartProducts(p:Product[]){

   this.storage.setItem('product',JSON.stringify(p))
  }
  clearing(){
    this.storage.clear();
  }
}


