import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from './components/dialog/dialog.component';
import { HomeService } from '../../home.service';
import { switchMap } from 'rxjs/operators';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories: string[] = [];
  products: Producto[] = [];
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

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const { _id, nombre, descripcion } = ordenProdut
        const sendShoppingCard = {
          _id,
          nombre,
          descripcion,
          cantidad: result,
        }
        console.log(sendShoppingCard);
      }
    });
  }

  changeCategory() {
    console.log(this.categorySelect)
    this.homeService.getCategoryProducts(this.idCategory, this.idCompany, this.categorySelect.trim())
      .subscribe(res => {
        this.products = [];
        res.productos.forEach(product => {
          this.products.push(product);
        })
      })
  }
}
