import { Component, OnInit,Input} from '@angular/core';
import { AddcartService } from 'src/app/services/addcart.service';
import { Product } from 'src/app/models/product';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  addcartproducts:Product[]=[];
  total!:number;
  selecting =9;
  amount:any;
  counts=['1','2','3','4','5','6','7','8'];
 selected='';

  constructor(private service:AddcartService,
    private http:HttpService,
    private route:Router
    ) { }

  ngOnInit(): void {
    this.addcartproducts=this.service.getToCart();
    this.calculateTheTotal();
  }
  refersh():void{
    window.location.reload();
   }

/**/


  selectChange(value: string, product: Product) {
    const index = this.addcartproducts.indexOf(product);
    this.addcartproducts[index] = product;
    this.addcartproducts[index].amount = value;
    localStorage.setItem('products', JSON.stringify(this.addcartproducts));
 this.calculateTheTotal();
   
  }
  calculateTheTotal() {
    console.log(this.total)
    this.total = this.addcartproducts.reduce((ac, i) => {
      this.total = parseFloat(
        (ac + Number(i.price )* Number(i.amount)).toFixed(2)
      );
      return Number(this.total);
    }, 0);
  console.log(this.total)
}
remove(id:number){
  const cartIndx =  this.addcartproducts?  this.addcartproducts.findIndex(cart => cart.id === id): -1;
  if(cartIndx != -1 &&  this.addcartproducts.length > 0){
    this.addcartproducts.splice(cartIndx,1)
    this.service.getcartProducts(this.addcartproducts)
    this.calculateTheTotal()
  }
 }
 checkSuccess(username:string){
  this.service.clearing();
  this.route.navigateByUrl(`success/${username}/${this.total}`);

 }//
}