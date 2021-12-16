import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../interfaces/carrito-de-compras';

export interface Product {
  name: string;
  description: string;
  amount: number;
}


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  totalToPay: number = 0;
  displayedColumns: string[] = ['name', 'description', 'amount', 'option'];
  dataSource: ShoppingCart[] = [];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = JSON.parse(localStorage.getItem('shoppingcart') || "[]");
    this.dataSource.forEach((product,index) => {
      this.totalToPay += product.cantidad * product.precio;
      product["index"]=index;
    })
  }
  deleteProductShoppingCart(index:number) {
    this.totalToPay=0;
    this.dataSource = this.dataSource.filter(product=>product.index!=index);
    this.dataSource.forEach((product,index) => {
      this.totalToPay += product.cantidad * product.precio;
      product["index"]=index;
    });
    localStorage.setItem("shoppingcart", JSON.stringify(this.dataSource));
  }
}
