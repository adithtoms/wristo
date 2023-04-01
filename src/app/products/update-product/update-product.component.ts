import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  pid: any
  pdata: any

  constructor(private ar: ActivatedRoute, private ps: ProductService,private route:Router) { }


  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.pid = data["id"]
    })

    this.ps.viewProduct(this.pid).subscribe((data: any) => {
      this.pdata = data
      console.log(this.pdata);
      
    })
  }

  

  updateProduct(form:any){
   
    this.ps.updateProduct(this.pid,this.pdata).subscribe((item:any)=>{
      alert("product details updated")
    })
    this.route.navigateByUrl('products')



  }

}
