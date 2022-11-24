import { Component, Input, OnInit,EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpService } from 'src/app/services/http.service';
import { AddcartService } from 'src/app/services/addcart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  @Input() product!:Product;
   productsList:Product[]=[];
   selectedItem = '1';
   productCount: string[] = ['1', '2', '3', '4', '5'];
  constructor(private httpService:HttpService,private addcartService:AddcartService) { }

  ngOnInit(): void {
    //---??
    const products=this.httpService.getProducts().subscribe((res)=>
     {  this.productsList=res;}
    )

  }

  addToCart(addcart:Product){
   
    let productCarts= this.addcartService.addToCart(addcart);
   let productCart=productCarts.find((item) => item.id === addcart.id);
      productCart!.amount = this.selectedItem;
    
    alert("Added");
   
   
  }
 

 


selectedChange(value: any) {
  this.selectedItem = value;
}
 

}
