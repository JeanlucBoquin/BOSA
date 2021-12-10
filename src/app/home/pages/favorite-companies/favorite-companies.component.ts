import { Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit, ViewChild } from '@angular/core';
import { Empresa } from '../../interfaces/empresa';
import { AuthService } from '../../../auth/auth.service';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-companies',
  templateUrl: './favorite-companies.component.html',
  styleUrls: ['./favorite-companies.component.css']
})
export class FavoriteCompaniesComponent implements OnInit, AfterViewInit {
  @ViewChildren("font") cali!: QueryList<ElementRef>;
  @ViewChild("noDisponibles") noDisponibles!: ElementRef;

  empresas: Empresa[] = [];
  empresasFavoritas: string[] = []

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.empresas.length > 0) {
        this.agregarCalificacion()
      }
    }, 200)
  }

  ngOnInit(): void {
    this.authService.getCompaniesFavorite()
      .subscribe(res => {
        if (res.ok === true) {
          res.empresasFavoritas.forEach(empresa => {
            this.empresas.push(empresa)
            this.empresasFavoritas.push(empresa._id);
          });
          if (res.empresasFavoritas.length == 0) {  
            this.noDisponibles.nativeElement.innerHTML =
              `
              <div class="p-3" style="background-color:  #16a085; border-radius: 5px;">                
                <h1>Manten la calma</h1>
                <p>Aun no se agregas empresas a tu lista de favoritos</p>
              </div>
              `
          }
        }
      })
  }

  like_dislike(idEmpresa: string, element: HTMLElement) {
    if (this.empresasFavoritas.includes(idEmpresa)) {
      this.authService.setCompaniesFavorite(idEmpresa, false)
        .pipe(
          switchMap(res => this.authService.getCompaniesFavorite())
        )
        .subscribe(res => {
          if (res.ok === true) {
            this.empresas = []
            res.empresasFavoritas.forEach(empresa => {
              this.empresas.push(empresa)
            });
            if (res.empresasFavoritas.length == 0) {  
              this.noDisponibles.nativeElement.innerHTML =
                `
                <div class="p-3" style="background-color: #16a085; border-radius: 5px;">                
                  <h1>Manten la calma</h1>
                  <p>Aun no se agregas empresas a tu lista de favoritos</p>
                </div>
                `
            }
          }
        });
      const index = this.empresasFavoritas.indexOf(idEmpresa);
      this.empresasFavoritas.splice(index, 1);
      element.style.color = "#000";
    } else {
      this.authService.setCompaniesFavorite(idEmpresa, true)
        .subscribe();
      this.empresasFavoritas.push(idEmpresa)
      element.style.color = "#e74c3c";
    }
  }

  navegate(idEmpresa: string, idCategoria: string) {
    this.router.navigateByUrl(`/home/categories/${idCategoria}/companies/${idEmpresa}/products`)
  }

  agregarCalificacion() {
    this.cali.forEach((ele, index) => {
      const calificacion = this.empresas[index].calificacion;
      for (let i = 0; i < 5; i++) {
        let estrella = (calificacion > i) ? '<i class="fas fa-star" style="color: #F2E205;"></i>' : '<i class="far fa-star"></i>'
        ele.nativeElement.innerHTML += estrella
      }
    });
  }
}
