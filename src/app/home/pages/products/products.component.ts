import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from './components/dialog/dialog.component';
import { HomeService } from '../../home.service';
import { switchMap } from 'rxjs/operators';
import { Producto } from '../../interfaces/producto';
import { ShoppingCart } from '../../interfaces/carrito-de-compras';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories: string[] = [];
  products: Producto[] = [];
  shoppingCarts: ShoppingCart[] = [];
  categorySelect: string = "default";
  companyName: string = "";
  companyImg: string = "default.png";

  idCategory: string = "";
  idCompany: string = "";

  constructor(public dialog: MatDialog,
    private router: ActivatedRoute,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.router.params
      .pipe(
        switchMap(res => {
          this.idCategory = res.idCategory;
          this.idCompany = res.idCompany;
          return this.homeService.getProductsTopAndCategories(this.idCategory, this.idCompany)
        })
      )
      .subscribe(res => {
        this.companyName = res.nombreEmpresa;
        this.companyImg = res.imgEmpresa;
        res.categotiasProducto.forEach(category => { this.categories.push(category._id) });
        res.productos.forEach(product => { this.products.push(product) })
      });
  }

  openDialog(idProduct: string): void {
    const ordenProdut: Producto = this.products.find(product => product._id === idProduct)!;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: ordenProdut,
    });

    dialogRef.afterClosed().subscribe(cantidad => {
      if (cantidad) {
        const { _id, nombre, descripcion, precio } = ordenProdut
        const sendShoppingCart = { _id, idCompany: this.idCompany, nombre, descripcion, precio, cantidad }
        if (localStorage.getItem("shoppingcart")) {
          this.shoppingCarts = JSON.parse(localStorage.getItem("shoppingcart")!);
          this.shoppingCarts.push(sendShoppingCart);
          localStorage.setItem("shoppingcart", JSON.stringify(this.shoppingCarts));
        } else {
          this.shoppingCarts.push(sendShoppingCart);
          localStorage.setItem("shoppingcart", JSON.stringify(this.shoppingCarts));
        }
      }
    });
  }

  changeCategory() {
    this.homeService.getCategoryProducts(this.idCategory, this.idCompany, this.categorySelect.trim())
      .subscribe(res => {
        this.products = [];
        res.productos.forEach(product => {
          this.products.push(product);
        })
      })
  }
}
