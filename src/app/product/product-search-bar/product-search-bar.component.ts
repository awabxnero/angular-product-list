import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Observable, timer } from "rxjs";
import { ProductService } from "src/app/shared/service/product.service";

@Component({
  selector: "app-product-search-bar",
  templateUrl: "./product-search-bar.component.html",
  styleUrls: ["./product-search-bar.component.scss"],
})
export class ProductSearchBarComponent implements OnInit {
  categoryOptions = [];
  categorySelected = "all";
  @Output() categoryChanged = new EventEmitter();
  $categoryObserv: Observable<any>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getCategoryList();
  }

  getCategoryList() {
    this.$categoryObserv = this.productService.getCategoryList();

    // .subscribe((res) => {
    //   this.categoryOptions = res;
    // });
  }

  categoryOnChange() {
    // TO DO: call the onSearch function
    this.categoryChanged.emit(this.categorySelected);
  }
}
