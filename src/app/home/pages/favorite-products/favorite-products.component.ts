import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../home.service';
import { Producto } from '../../interfaces/producto';
import { ShoppingCart } from '../../interfaces/carrito-de-compras';
import { DialogComponent } from '../products/components/dialog/dialog.component';
import { AuthService } from '../../../auth/auth.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.component.html',
  styleUrls: ['./favorite-products.component.css']
})
export class FavoriteProductsComponent implements OnInit {
  @ViewChild("noDisponibles") noDisponibles!: ElementRef

  categories: string[] = [];
  products: Producto[] = [];
  shoppingCarts: ShoppingCart[] = [];
  idCompany: string = "";
  productosFavoritos: string[] = []

  // categorySelect: string = "default";
  // companyName: string = "";
  // companyImg: string = "default.png";
  // idCategory: string = "";

  constructor(
    public dialog: MatDialog,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getProductsFavorite()
      .subscribe(res => {
        res.productosFavoritos.forEach(product => {
          this.products.push(product);
          this.productosFavoritos.push(product._id);
        });
        if (res.productosFavoritos.length == 0) {  
          this.noDisponibles.nativeElement.innerHTML =
            `
            <div class="p-3" style="background-color:  #16a085; border-radius: 5px;">                
              <h1>Manten la calma</h1>
              <p>Aun no se agregas productos a tu lista de favoritos</p>
            </div>
            `
        }
      })
  }

  // changeCategory() {
  //   this.homeService.getCategoryProducts(this.idCategory, this.idCompany, this.categorySelect.trim())
  //     .subscribe(res => {
  //       this.products = [];
  //       res.productos.forEach(product => {
  //         this.products.push(product);
  //       })
  //     })
  // }

  openDialog(idProduct: string): void {
    const ordenProdut: Producto = this.products.find(product => product._id === idProduct)!;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: ordenProdut,
    });

    dialogRef.afterClosed().subscribe(cantidad => {
      if (cantidad) {
        const { _id, nombre, descripcion, precio, idEmpresa } = ordenProdut
        const sendShoppingCart = { _id, idEmpresa, nombre, descripcion, precio, cantidad }
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

  like_dislike(idProducto: string, element: HTMLElement){
    if (this.productosFavoritos.includes(idProducto)) {
      this.authService.setProductFavorite(idProducto, false)
        .pipe(
          switchMap(res => this.authService.getProductsFavorite())
        )
        .subscribe(res => {
          if (res.ok === true) {
            this.products = []
            res.productosFavoritos.forEach(product => {
              this.products.push(product)
            });
            if (res.productosFavoritos.length == 0) {  
              this.noDisponibles.nativeElement.innerHTML =
                `
                <div class="p-3" style="background-color:  #16a085; border-radius: 5px;">                
                  <h1>Manten la calma</h1>
                  <p>Aun no se agregas productos a tu lista de favoritos</p>
                </div>
                `
            }
          }
        });
      const index = this.productosFavoritos.indexOf(idProducto);
      this.productosFavoritos.splice(index, 1);
      element.style.color = "#000";
    } else {
      this.authService.setCompaniesFavorite(idProducto, true)
        .subscribe();
      this.productosFavoritos.push(idProducto)
      element.style.color = "#e74c3c";
    }
  }
}
