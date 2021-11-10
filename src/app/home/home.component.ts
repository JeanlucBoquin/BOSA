import { Component, OnInit } from '@angular/core';

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
      nombre: "Motoristas",
      img: "../../assets/sidenav/scooter.png"
    },
    {
      nombre: "Registrar Empresa",
      img: "../../assets/sidenav/registrar.png"
    },
    {
      nombre: "Registrar Motorista",
      img: "../../assets/sidenav/registrar.png"
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
  constructor() { }

  ngOnInit(): void {
  }
  navegation(path:string){
    console.log(path)
  }
}
