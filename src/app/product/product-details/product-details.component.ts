import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductDetailsResponse } from "src/app/model/product.model";
import { ProductService } from "src/app/shared/service/product.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  productID: number;
  productDetails: ProductDetailsResponse;
  rating: string;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productID = this.activatedRoute.snapshot.params["id"];
    this.productService
      .getProduct(this.productID)
      .subscribe((product: ProductDetailsResponse) => {
        this.productDetails = product;
        this.rating = `${(product.rating.rate * 100) / 5}%`;
      });
  }
}
