import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-products',
  templateUrl: './register-products.component.html',
  styleUrls: ['./register-products.component.css']
})
export class RegisterProductsComponent implements OnInit {

  title = 'Nuevo Producto';

  constructor() { }

  ngOnInit(): void {
  }

}
