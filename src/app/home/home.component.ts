import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface BtnOptions {
  nombre: string;
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  btnOptions_1: BtnOptions[] = [
    {
      nombre: "Categorias",
      img: "../../assets/img/sidenav/categoria.png"
    },
    {
      nombre: "Empresas favoritas",
      img: "../../assets/img/sidenav/company.png"
    },
    {
      nombre: "Productos favoritos",
      img: "../../assets/img/sidenav/package.png"
    },
    {
      nombre: "Carrito",
      img: "../../assets/img/sidenav/carrito-de-compras.png"
    },
    {
      nombre: "Historial",
      img: "../../assets/img/sidenav/historial-medico.png"
    }
  ]
  btnOptions_2: BtnOptions[] = [
    {
      nombre: "Cuenta",
      img: "../../assets/img/sidenav/cuenta.png"
    },
    {
      nombre: "Ajustes",
      img: "../../assets/img/sidenav/ajustamiento.png"
    },
    {
      nombre: "Cerrar sesion",
      img: "../../assets/img/sidenav/cerrar-sesion.png"
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegation(path: string) {
    // console.log(path)
    if (path == "Categorias") {
      this.router.navigateByUrl('/home/categories');
    } else if (path == "Empresas favoritas") {
      this.router.navigateByUrl('/home/favorite-companies');
    } else if (path == "Productos favoritos") {
      this.router.navigateByUrl('/home/favorite-products');
    }else if (path == "Carrito") {
      this.router.navigateByUrl('/home/shopping-cart');
    } else if (path == "Historial") {
      this.router.navigateByUrl('/home/record');
    } else if (path == "Cuenta") {
      this.router.navigateByUrl('/home/account');
    }else if (path == "Ajustes") {
      this.router.navigateByUrl('/home/settings');
    } else if (path == "Cerrar sesion") {
      this.router.navigateByUrl('/auth/login');
    }
  }
}
