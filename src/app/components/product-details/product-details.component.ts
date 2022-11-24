import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { HttpService } from 'src/app/services/http.service';
import { AddcartService } from 'src/app/services/addcart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  counts=['1','2','3','4','5','6','7','8'];
 id: number | null = null;
 products: Product[]= [];
 product: Product | null = null;
 selectedItem = '1';


  constructor(private router: Router, 
   private addcartService:AddcartService
    ,private route: ActivatedRoute, private httpService: HttpService) {
   

   
   
  }

  ngOnInit(): void {
     this.route.params.subscribe(params => {
      this.id= +params['id'];
    });

    this.httpService.getProducts().subscribe(res =>{
      this.products = res;
      this.product = this.getProductId(this.id)
      console.log(this.product)
    })
 
  }
  getProductId(id: number | null): Product{
    return this.products.filter(product => product.id === id)[0];
  }
 

  selectedChange(value: any) {
    this.selectedItem = value;
  }
  addToCart(addcart:Product){
   
    let productCarts= this.addcartService.addToCart(addcart);
   let productCart=productCarts.find((item) => item.id === addcart.id);
      productCart!.amount = this.selectedItem;
    
    alert("Added");
   
   
  }
  
}
/*
  }*/