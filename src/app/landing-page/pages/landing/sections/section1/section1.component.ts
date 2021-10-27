import { AfterViewInit, Component } from '@angular/core';

interface Carrusel {
  titulo: string;
  subtitulo: string;
  img: string;
  mensajebtn?: string;
}

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements AfterViewInit {

  scrWidth: number = 0;
  reAdaptacion!: NodeListOf<Element>;
  carrusel: Carrusel[] = [
    {
      titulo: "Tu experiencia en BOSA sera unica e inolvidable",
      subtitulo: "Nuestro servico esta garactizado",
      mensajebtn: "Comenzar la experiencia",
      img: "../../../../../../assets/img/imgOptimizadas/full-length-portrait-cheerful.jpg"
    },
    {
      titulo: "Olvida las limitaciones con BOSA puedes realizar multiples compras",
      subtitulo: "Realiza compras en cualquiera de las tiendas afiliadas",
      mensajebtn: "",
      img: "../../../../../../assets/img/imgOptimizadas/shopping-carts2.jpg"
    },
    {
      titulo: "El registro de entregas BOSA posee el record actual de entregas rapidas",
      subtitulo: "El tiempo es una de nuestrar mayores prioridades",
      mensajebtn: "",
      img: "../../../../../../assets/img/imgOptimizadas/shopping-carts4444.jpg"
    }
  ]
  
  constructor() { }

  ngAfterViewInit(): void {
    this.scrWidth = window.innerWidth;
    this.reAdaptacion = document.querySelectorAll(".adaptacionDesk");
    console.log(this.reAdaptacion);
    (this.reAdaptacion.length == 0) ? (this.reAdaptacion = document.querySelectorAll(".adaptacionMovil")) : null;
    console.log(this.reAdaptacion);
    this.reAdaptacion.forEach(element => {
      if (this.scrWidth < 912) {
        element.classList.remove("adaptacionDesk")
        element.classList.add("adaptacionMovil")
      } else {
        element.classList.add("adaptacionDesk")
        element.classList.remove("adaptacionMovil")
      }
    })
  }

}
