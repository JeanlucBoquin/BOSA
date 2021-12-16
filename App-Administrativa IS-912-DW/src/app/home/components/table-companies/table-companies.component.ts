import { Component, OnInit } from '@angular/core';
import { EmpresaCompleta } from 'src/app/services/interfaces/empresas';
import { EmpresaService } from '../../../services/empresa.service';

@Component({
  selector: 'app-table-companies',
  templateUrl: './table-companies.component.html',
  styleUrls: ['./table-companies.component.css']
})
export class TableCompaniesComponent implements OnInit {
  empresas: EmpresaCompleta[] = []
  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.empresaService.obtenerTodasLasEmpresasDatosCompletos()
      .subscribe(res=>{
        if(res.ok===true){
          res.empresas.forEach(empresa=>{
            this.empresas.push(empresa)
          })
        }
      })
  }

}
