import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:string="MyStore";
  productsList!:Product[];
  constructor(private http:HttpService) { 

    this.http.getProducts().subscribe((res)=>
    {  this.productsList=res;}
   )
  }
  

  ngOnInit(): void {
  }

}
