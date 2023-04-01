import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  


  constructor(private fb:FormBuilder,private ps:ProductService,private route:Router){}


  ngOnInit(): void {
    
  }
  addProductForm=this.fb.group({
    id: [""],
    productName:[""],
    categoryId: [""],
    description: [""],
    price: [""],
    isAvailable:[""],
    productImage:[""],
    rating: [""],
    review: [""],
    vendorName: [""],
    warrenty: [""]
  })

  addProduct(){
    let pData={
      id: this.addProductForm.value.id,
      productName:this.addProductForm.value.productName,
      categoryId: this.addProductForm.value.categoryId,
      description: this.addProductForm.value.description,
      price: this.addProductForm.value.price,
      isAvailable:this.addProductForm.value.isAvailable,
      productImage:this.addProductForm.value.productImage,
      rating: this.addProductForm.value.rating,
      review: this.addProductForm.value.review,
      vendorName: this.addProductForm.value.vendorName,
      warrenty: this.addProductForm.value.warrenty
    }

    this.ps.addNewProduct(pData).subscribe((data:any)=>{
      alert("new product added")
      this.route.navigateByUrl('products')
      

    })
  }

}
