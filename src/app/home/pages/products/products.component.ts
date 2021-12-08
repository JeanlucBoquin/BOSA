import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild("noDisponibles") noDisponibles!:ElementRef
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
        if(res.productos.length==0){
        // console.log("init",this.noDisponibles.nativeElement);  
        this.noDisponibles.nativeElement.innerHTML =  
          `
          <div class="p-3" style="background-color: rgba(217, 50, 50, 0.9); border-radius: 5px;">                
            <h1>Lo sentimos</h1>
            <p>Aun no se ha registrado productos en esta empresa</p>
          </div>
          `
        }
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
