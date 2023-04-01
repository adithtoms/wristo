import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //create obj for bs
  search=  new BehaviorSubject("");

  constructor(private http:HttpClient) { }


// api call to view all prdts
  viewAllProducts(){
   return this.http.get('http://localhost:3000/products')
  }

  //api call to view single prdct
  viewProduct(productId:any){
    return this.http.get('http://localhost:3000/products/'+productId)

  }

  //api to delete prdct
  deleteProduct(productId:any){
    return this.http.delete('http://localhost:3000/products/'+productId)
  }

  //api call to add new product
  addNewProduct(product:any){
    return this.http.post('http://localhost:3000/products/',product)

  }

  //api call to update product
  updateProduct(productId:any,product:any){
    return this.http.put('http://localhost:3000/products/'+productId,product)

  }
}
