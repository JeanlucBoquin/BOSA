import { Component, OnInit } from '@angular/core';

interface Categoria{
  nombre:string;
  img:string;
}

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {
  
  categorias:Categoria[]=[
    {
      nombre:"Restaurantes",
      img:"assets/img/seccion 1/Tienda.png"
    },
    {
      nombre:"Mercados",
      img:"assets/img/seccion 1/Manzana.png"
    },
    {
      nombre:"Ferreterias",
      img:"assets/img/seccion 1/Eje.png"
    },
    {
      nombre:"Ropa",
      img:"assets/img/seccion 1/Ropa.png"
    },
    {
      nombre:"Farmacias",
      img:"assets/img/seccion 1/Corazon.png"
    },
    {
      nombre:"Tecnologia",
      img:"assets/img/seccion 1/Tecnologia.png"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
