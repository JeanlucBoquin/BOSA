import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  scrHeight: number = 0;
  scrWidth: number = 0;
  reAdaptacion!: NodeListOf<Element>;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    this.reAdaptacion = document.querySelectorAll(".adaptacionDesk");
    (this.reAdaptacion.length==0)?(this.reAdaptacion = document.querySelectorAll(".adaptacionMovil")):null;
    
    this.reAdaptacion.forEach(element=>{
      if (this.scrWidth < 912) {
        element.classList.remove("adaptacionDesk")
        element.classList.add("adaptacionMovil")
      }else{
        element.classList.add("adaptacionDesk")
        element.classList.remove("adaptacionMovil")
      }
    })

  }

  ngOnInit(): void {
    this.scrWidth = window.innerWidth;
    this.reAdaptacion = document.querySelectorAll(".adaptacionDesk");
    (this.reAdaptacion.length==0)?(this.reAdaptacion = document.querySelectorAll(".adaptacionMovil")):null;

    this.reAdaptacion.forEach(element=>{
      if (this.scrWidth < 912) {
        element.classList.remove("adaptacionDesk")
        element.classList.add("adaptacionMovil")
      }else{
        element.classList.add("adaptacionDesk")
        element.classList.remove("adaptacionMovil")
      }
    })

  }

}
