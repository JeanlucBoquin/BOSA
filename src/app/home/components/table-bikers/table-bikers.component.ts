import { Component, OnInit } from '@angular/core';
import { MotoristasService } from 'src/app/services/motoristas.service';

@Component({
  selector: 'app-table-bikers',
  templateUrl: './table-bikers.component.html',
  styleUrls: ['./table-bikers.component.css']
})
export class TableBikersComponent implements OnInit {

  bikers: any = [];

  constructor(
    private $bikers: MotoristasService
  ) { }

  ngOnInit(): void {
    this.$bikers.getBakers().subscribe(resp => {
      this.bikers = resp;
      console.log(resp);
    })
  }

}
