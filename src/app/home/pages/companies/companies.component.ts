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
        })
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
