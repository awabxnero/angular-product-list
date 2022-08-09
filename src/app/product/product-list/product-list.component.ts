import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog, MatTableDataSource, Sort } from "@angular/material";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ProductInterface } from "src/app/model/product.model";
import { ProductService } from "src/app/shared/service/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  dataSource: MatTableDataSource<ProductInterface> = new MatTableDataSource();
  displayedColumns: string[] = [
    "id",
    "title",
    "category",
    "price",
    "viewDetails",
  ];
  productList: ProductInterface[] = [];
  isLoading: boolean = false;

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    console.log("ProductListComponent ngOnInit");

    this.onSearch("");
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onSearch(category): void {
    this.isLoading = true;
    let cat = category;
    if (category === "all") {
      cat = "";
    }
    this.productService
      .searchProduct(cat)
      .pipe(takeUntil(this.destroy$.asObservable()))
      .subscribe(
        (res) => {
          this.productList = res;
          this.dataSource.data = this.productList;
          this.cdr.detectChanges();
        },
        () => (this.isLoading = false)
      );
  }

  sortData(sort: Sort) {
    const data = this.productList.slice();
    let sortedData;
    if (!sort.active || sort.direction === "") {
      sortedData = data;
      return;
    }

    sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "title":
          return this.compare(a.title, b.title, isAsc);
        case "id":
          return this.compare(a.id, b.id, isAsc);
        case "category":
          return this.compare(a.category, b.category, isAsc);
        case "price":
          return this.compare(a.price, b.price, isAsc);
        default:
          return 0;
      }
    });
    this.dataSource.data = sortedData;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
