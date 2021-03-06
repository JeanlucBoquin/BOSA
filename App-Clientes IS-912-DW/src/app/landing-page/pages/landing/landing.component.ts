import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  scrHeight: number = 0;
  scrWidth: number = 0;
  reAdaptacion!: NodeListOf<Element>;
  ventanaFlotante!: NodeListOf<Element>;

  constructor( private router:Router ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;

    if (this.scrWidth < 825) {
      document.getElementById("menuToggel")!.style.display = "block";
      document.getElementById("optionsNav")!.style.display = "none";
      // console.log(document.getElementById("menuToggel")?.style.display);

    } else {
      document.getElementById("menuToggel")!.style.display = "none";
      document.getElementById("optionsNav")!.style.display = "block";
    }

    // this.ventanaFlotante = document.querySelectorAll(".ventanaFlotante")!;
    // (this.ventanaFlotante.length == 0) ? (this.ventanaFlotante = document.querySelectorAll(".ventanaFlotanteMovil")!) : null;
    // this.ventanaFlotante.forEach(element => {
    //   if (this.scrWidth < 912) {
    //     element.classList.remove("ventanaFlotante")
    //     element.classList.add("ventanaFlotanteMovil")
    //   } else {
    //     element.classList.add("ventanaFlotante")
    //     element.classList.remove("ventanaFlotanteMovil")
    //   }
    // })

    // this.reAdaptacion = document.querySelectorAll(".adaptacionDesk");
    // (this.reAdaptacion.length == 0) ? (this.reAdaptacion = document.querySelectorAll(".adaptacionMovil")) : null;
    // this.reAdaptacion.forEach(element => {
    //   if (this.scrWidth < 912) {
    //     element.classList.remove("adaptacionDesk")
    //     element.classList.add("adaptacionMovil")
    //   } else {
    //     element.classList.add("adaptacionDesk")
    //     element.classList.remove("adaptacionMovil")
    //   }
    // })

  }

  ngOnInit(): void {
    this.scrWidth = window.innerWidth;

    if (this.scrWidth < 825) {
      document.getElementById("menuToggel")!.style.display = "block";
      document.getElementById("optionsNav")!.style.display = "none";
      // console.log(document.getElementById("menuToggel")?.style.display);

    } else {
      document.getElementById("menuToggel")!.style.display = "none";
      document.getElementById("optionsNav")!.style.display = "block";
    }

    // this.reAdaptacion = document.querySelectorAll(".adaptacionDesk");
    // // console.log(this.reAdaptacion);
    // (this.reAdaptacion.length == 0) ? (this.reAdaptacion = document.querySelectorAll(".adaptacionMovil")) : null;
    // // console.log(this.reAdaptacion);
    // this.ventanaFlotante = document.querySelectorAll(".ventanaFlotante");
    // this.ventanaFlotante.forEach(element => {
    //   if (this.scrWidth < 912) {
    //     element.classList.remove("ventanaFlotante")
    //     element.classList.add("ventanaFlotanteMovil")
    //   } else {
    //     element.classList.add("ventanaFlotante")
    //     element.classList.remove("ventanaFlotanteMovil")
    //   }
    // })


  //   this.reAdaptacion.forEach(element => {
  //     if (this.scrWidth < 912) {
  //       element.classList.remove("adaptacionDesk")
  //       element.classList.add("adaptacionMovil")
  //     } else {
  //       element.classList.add("adaptacionDesk")
  //       element.classList.remove("adaptacionMovil")
  //     }
  //   })
  }

  login(){
    this.router.navigateByUrl("/auth")
  }

}
