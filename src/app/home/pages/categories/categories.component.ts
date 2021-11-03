import { Component, OnInit } from '@angular/core';

interface Categoria{
  nombre:string;
  imagenes:string[];
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  intervalo:Number=10000;
  categories:Categoria[]=[
    {
      nombre:"Alimentos Para El Hogar",
      imagenes:[
        "AlimentosParaElHogar/mujerComprando.jpg",
        "AlimentosParaElHogar/verduras.jpg",
        "AlimentosParaElHogar/mercado.jpg"
      ]
    },
    {
      nombre:"Comida Y Bebidas",
      imagenes:[
        "ComidaYBebidas/comida.jpg",
        "ComidaYBebidas/chevanon.jpg",
        "ComidaYBebidas/donuts.jpg"
      ]
    },
    {
      nombre:"Medicamentos",
      imagenes:[
        "Medicamentos/medical-supplies.jpg",
        "Medicamentos/medication.jpg",
        "Medicamentos/ready.jpg"
      ]
    },
    {
      nombre:"Herramientas Y Papeleria",
      imagenes:[
        "HerramientasYPapeleria/herramientas.jpg",
        "HerramientasYPapeleria/arte.jpg",
        "HerramientasYPapeleria/taladro.jpg"
      ]
    },
    {
      nombre:"Ropa Y Accesorios",
      imagenes:[
        "RopaYAccesorios/zapatosRopa.jpg",
        "RopaYAccesorios/accesorios.jpg",
        "RopaYAccesorios/ropa.jpg"
      ]
    },
    {
      nombre:"Tecnologia",
      imagenes:[
        "Tecnologia/cpuGamer.jpg",
        "Tecnologia/headphone.jpg",
        "Tecnologia/desk.jpg"
      ]
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
