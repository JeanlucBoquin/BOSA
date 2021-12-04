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
  companyName:string="";
  companyImg:string="default.png";

  animal: string = 'Jeanluc';
  name: string = 'Jeanluc';

  constructor(public dialog: MatDialog,
    private router: ActivatedRoute,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.router.params
      .pipe(
        switchMap(res => this.homeService.getProductsTopAndCategories(res.idCategory, res.idCompany))
      )
      .subscribe(res => {
        this.companyName = res.nombreEmpresa;
        this.companyImg = res.imgEmpresa;
        res.categotiasProducto.forEach(category => { this.categories.push(category._id) });
        res.productos.forEach(product => { this.products.push(product) })
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  changeCategory(){
    console.log(this.categorySelect)
  }
}
