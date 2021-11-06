import { Component, OnInit } from '@angular/core';

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
  displayedColumns: string[] = ['name', 'description', 'amount'];
  dataSource: Product[] = [
    { name: 'Hydrogen', description: 'Whisky Johnnie Walker Etiq Negra 750 ml', amount:5 },
    { name: 'Helium', description: 'Whisky Johnnie Walker Etiq Negra 750 ml', amount:5 },
    { name: 'Lithium', description: 'Whisky Johnnie Walker Etiq Negra 750 ml', amount:5 },
    { name: 'Beryllium', description: 'Whisky Johnnie Walker Etiq Negra 750 ml', amount:5 },
    { name: 'Boron', description: 'Whisky Johnnie Walker Etiq Negra 750 ml', amount:5 },
    { name: 'Carbon', description: 'Whisky Johnnie Walker Etiq Negra 750 ml', amount:5 },
    { name: 'Nitrogen', description: 'Whisky Johnnie Walker Etiq Negra 750 ml', amount:5 },
    { name: 'Oxygen', description: 'Whisky Johnnie Walker Etiq Negra 750 ml', amount:5 },
    { name: 'Fluorine', description: 'Whisky Johnnie Walker Etiq Negra 750 ml', amount:5 },
    { name: 'Neon', description: 'Whisky Johnnie Walker Etiq Negra 750 ml', amount:5 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
