import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductInterface } from "src/app/model/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseURL = "https://fakestoreapi.com/products";

  constructor(private httpClient: HttpClient) {}

  searchProduct(category?: string): Observable<ProductInterface[]> {
    let url = this.baseURL;
    if (!!category) {
      url = url + "/category/" + category;
    }
    return this.httpClient.get<ProductInterface[]>(url);
  }

  getCategoryList(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.baseURL + "/categories");
  }

  getProduct(id: number): Observable<ProductInterface> {
    return this.httpClient.get<ProductInterface>(
      "https://fakestoreapi.com/products/" + id
    );
  }
}
