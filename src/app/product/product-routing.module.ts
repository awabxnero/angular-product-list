import { RouterModule, Routes } from "@angular/router";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductListComponent } from "./product-list/product-list.component";

const productRoutes: Routes = [
  {
    path: "",
    component: ProductListComponent,
  },
  {
    path: "product-details/:id",
    component: ProductDetailsComponent,
  },
];

export const ProductRoutingModule = RouterModule.forChild(productRoutes);
