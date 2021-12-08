import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../interfaces/empresa';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-favorite-companies',
  templateUrl: './favorite-companies.component.html',
  styleUrls: ['./favorite-companies.component.css']
})
export class FavoriteCompaniesComponent implements OnInit {
  // @vi
  empresas: Empresa[] = [];
  empresasFavoritas:string[]=[]

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.getCompaniesFavorite()
      .subscribe(res=>{
        if(res.ok===true){
          this.empresasFavoritas = this.authService.usuarioActual.empresas_favoritas;
          res.empresasFavoritas.forEach(empresa=>{
            this.empresas.push(empresa)
          })
        }
        console.log(res)
      })
  }
  like_dislike(idEmpresa:string){
    console.log(idEmpresa)
  }
}
