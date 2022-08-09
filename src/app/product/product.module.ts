import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductService } from "../shared/service/product.service";
import { SharedModule } from "../shared/shared.module";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductSearchBarComponent } from "./product-search-bar/product-search-bar.component";
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [ProductListComponent, ProductSearchBarComponent, ProductDetailsComponent],
  imports: [CommonModule, SharedModule, ProductRoutingModule],
  providers: [ProductService],
})
export class ProductModule {}
