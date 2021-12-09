import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

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
      img: "../../assets/sidenav/categoria.png",
    },
    {
      nombre: "Empresas",
      img: "../../assets/sidenav/empresa.png"
    },
    {
      nombre: "Productos",
      img: "../../assets/sidenav/package.png"
    },
    {
      nombre: "Motoristas",
      img: "../../assets/sidenav/scooter.png"
    },
    {
      nombre: "Registrar Empresa",
      img: "../../assets/sidenav/empresa.png"
    },
    {
      nombre: "Registrar Producto",
      img: "../../assets/sidenav/package.png"
    },
    {
      nombre: "Registrar Motorista",
      img: "../../assets/sidenav/scooter.png"
    }
  ]
  btnOptions_2: BtnOptions[] = [
    {
      nombre: "Cuenta",
      img: "../../assets/sidenav/cuenta.png"
    },
    {
      nombre: "Ajustes",
      img: "../../assets/sidenav/ajustamiento.png"
    },
    {
      nombre: "Cerrar sesion",
      img: "../../assets/sidenav/cerrar-sesion.png"
    }
  ]

  constructor(
    private $cookie: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  navegation(path: string) {
    console.log(path)
    if (path == "Categorias") {
      this.router.navigateByUrl('/home/categories')
    } else if (path == "Empresas") {
      this.router.navigateByUrl('/home/companies')
    } else if (path == "Productos") {
      this.router.navigateByUrl('/home/products')
    } else if (path == "Motoristas") {
      this.router.navigateByUrl('/home/bikers')
    } else if (path == "Registrar Empresa") {
      this.router.navigateByUrl('/home/register-company')
    } else if (path == "Registrar Producto") {
      this.router.navigateByUrl('/home/register-product')
    } else if (path == "Registrar Motorista") {
      this.router.navigateByUrl('/home/register-biker')
    } else if (path == "Cuenta") {
      this.router.navigateByUrl('/home/account')
    } else if (path == "Ajustes") {
      this.router.navigateByUrl('/home/settings')
    } else if (path == "Cerrar sesion") {
      this.router.navigateByUrl('/login');
      this.$cookie.delete('token_access');
    }
  }
}
