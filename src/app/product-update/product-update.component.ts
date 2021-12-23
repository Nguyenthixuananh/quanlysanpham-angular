import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {ActivatedRoute, convertToParamMap, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({

  });
  id = 0;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=> {
      // @ts-ignore
      this.id = +paramMap.get('id');
      const product = this.getProduct(this.id);
      this.productForm = new FormGroup({
        // @ts-ignore
        id: new FormControl(product.id),
        // @ts-ignore
        name: new FormControl(product.name),
        // @ts-ignore
        price: new FormControl(product.price),
        // @ts-ignore
        description: new FormControl(product.description),
      });
    });
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  updateProduct(id :number){
    // @ts-ignore
    const product = this.productForm.value;
    this.productService.updateProduct(id, product);
    alert('Cập nhật thành công!!')
    this.router.navigate(["product/list"])

  }

  ngOnInit(): void {
  }

}
