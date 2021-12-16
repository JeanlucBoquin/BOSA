import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikers',
  templateUrl: './bikers.component.html',
  styleUrls: ['./bikers.component.css']
})
export class BikersComponent implements OnInit {

  title = 'Motoristas'

  constructor() { }

  ngOnInit(): void {
  }

}
