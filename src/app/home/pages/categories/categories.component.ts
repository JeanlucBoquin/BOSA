import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../interfaces/categoria';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  intervalo: Number = 10000;
  vectorCategorias: Categoria[] = []
  cargado: boolean = false;

  constructor(private router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getCategories().subscribe(
      res => {
        res.categorias.forEach(categoria => {
          this.vectorCategorias.push(categoria)
        });
        setTimeout(() => {
          this.cargado = true
        }, 50)
      }
    )
  }

  navegation(idCategory: string) {
    this.router.navigate(['home/categories', idCategory, "companies"])
  }
}
