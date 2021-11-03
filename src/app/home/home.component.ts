import { Component, NgModule, OnInit } from '@angular/core';

interface BtnOptions{
  nombre:string;
  img:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  btnOptions_1:BtnOptions[]=[
    {
      nombre:"Categorias",
      img:"../../assets/img/sidenav/categoria.png"
    },
    {
      nombre:"Empresas favoritas",
      img:"../../assets/img/sidenav/company.png"
    },
    {
      nombre:"Productos favoritos",
      img:"../../assets/img/sidenav/package.png"
    },
    {
      nombre:"Carrito",
      img:"../../assets/img/sidenav/carrito-de-compras.png"
    },
    {
      nombre:"Historial",
      img:"../../assets/img/sidenav/historial-medico.png"
    }
  ]
  btnOptions_2:BtnOptions[]=[
    {
      nombre:"Cuenta",
      img:"../../assets/img/sidenav/cuenta.png"
    },
    {
      nombre:"Ajustes",
      img:"../../assets/img/sidenav/ajustamiento.png"
    },
    {
      nombre:"Cerrar sesion",
      img:"../../assets/img/sidenav/cerrar-sesion.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
// <button mat-button>
// <div style="display: flex; justify-content: flex-start; gap: .5rem;">
//     <div>
//         <img style="width: 18px;" src="../../assets/img/sidenav/categoria.png" alt="">
//     </div>
//     <span>Categorias</span>
// </div>
// </button>