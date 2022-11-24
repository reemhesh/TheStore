import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  products!:Product[];
  id!:number;
  todos$ = new BehaviorSubject<Product[]>(this.products);
  constructor(private http: HttpClient) { }
  fetchTodos() {
    const subscription = this.http.get<Product[]>('/assets/data.json').subscribe(todos => {
      this.products = todos;
      this.todos$.next(this.products);
     
      subscription.unsubscribe();
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/data.json');
     
   }
   

    removeTodo(id: number) {
      console.log(this.products)
      const index = this.products.findIndex(t => t.id === id);
      this.products.splice(index, 1);
  
     // this.todos$.next(this.products);
    }
  

  }
