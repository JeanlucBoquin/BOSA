import { Component, OnInit } from '@angular/core';

interface Funcion{
  nombre:string;
  descripcion:string;
  img:string;
}

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit {
  funciones:Funcion[]=[
    {
      nombre:"Carrito",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, amet!",
      img:"../../../../assets/img/Carrito.png"
    },
    {
      nombre:"Realiza tu pago",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, amet!",
      img:"../../../../assets/img/Pago2.png"
    },
    {
      nombre:"Producto en camino",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, amet!",
      img:"../../../../assets/img/Envio2.png"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
