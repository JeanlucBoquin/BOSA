import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../home.service';
import { Empresa } from '../../interfaces/empresa';
import { switchMap, tap } from 'rxjs/operators'
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit, AfterViewInit {
  @ViewChildren('font') prueba!: QueryList<ElementRef>;
  @ViewChild("noDisponibles") noDisponibles!: ElementRef;
  empresas: Empresa[] = [];
  empresasFavoritas: string[] = []

  constructor(
    private router: ActivatedRoute,
    private homeService: HomeService,
    private authService: AuthService
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
        switchMap(res => this.homeService.getCompanies(res.idCategory)),
        switchMap(res => {
          res.empresas.forEach(empresa => {
            this.empresas.push(empresa)
          });
          if (res.empresas.length == 0) {  
            this.noDisponibles.nativeElement.innerHTML =
              `
              <div class="p-3" style="background-color: rgba(217, 50, 50, 0.9); border-radius: 5px;">                
                <h1>Lo sentimos</h1>
                <p>Aun no se ha registrado empresas en esta categoria</p>
              </div>
              `
          }
          return this.authService.getCompaniesFavorite()
        })
      ).subscribe(res => {
        if(res.ok){
          res.empresasFavoritas.forEach(empresa => {
            this.empresasFavoritas.push(empresa._id)
          })
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

  like_dislike(idEmpresa: string, element: HTMLElement) {
    if (this.empresasFavoritas.includes(idEmpresa)) {
      this.authService.setCompaniesFavorite(idEmpresa, false)
        .subscribe()
      const index = this.empresasFavoritas.indexOf(idEmpresa);
      this.empresasFavoritas.splice(index, 1);
      element.style.color = "#000";
    } else {
      this.authService.setCompaniesFavorite(idEmpresa, true)
        .subscribe();
      this.empresasFavoritas.push(idEmpresa)
      element.style.color = "#e74c3c";
    }
    // console.log(this.empresasFavoritas)
  }

}
