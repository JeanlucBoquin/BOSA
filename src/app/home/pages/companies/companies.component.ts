import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../home.service';
import { Empresa } from '../../interfaces/empresa';
import { switchMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit, AfterViewInit {
  @ViewChildren('font') prueba!: QueryList<ElementRef>;
  @ViewChild("noDisponibles") noDisponibles!:ElementRef;
  empresas: Empresa[] = [];

  constructor(private router: ActivatedRoute,
    private homeService: HomeService
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.empresas.length > 0) {
        this.agregarCalificacion()
      }
    }, 200)
  }

  ngOnInit(): void {
    this.router.params
      .pipe(
        switchMap(res => this.homeService.getCompanies(res.idCategory))
      ).subscribe(res => {
        res.empresas.forEach(empresa => {
          this.empresas.push(empresa)
        });
        if(res.empresas.length==0){
          // console.log("init",this.noDisponibles.nativeElement);  
          this.noDisponibles.nativeElement.innerHTML =  
            `
            <div class="p-3" style="background-color: rgba(217, 50, 50, 0.9); border-radius: 5px;">                
              <h1>Lo sentimos</h1>
              <p>Aun no se ha registrado empresas en esta categoria</p>
            </div>
            `
          }
      });

  }

  agregarCalificacion() {
    // console.log(this.prueba.first.nativeElement)
    this.prueba.forEach((ele, index) => {
      const calificacion = this.empresas[index].calificacion;
      for (let i = 0; i < 5; i++) {
        let estrella = (calificacion > i) ? '<i class="fas fa-star" style="color: #F2E205;"></i>' : '<i class="far fa-star"></i>'
        ele.nativeElement.innerHTML += estrella
      }
    });
  }

}
