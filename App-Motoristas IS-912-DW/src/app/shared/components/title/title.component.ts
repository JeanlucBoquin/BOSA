import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() title: string = 'Ordenes';
  @Input() title1: string = '';
  @Input() src: string = '../../../../assets/img/disponibles.png';

  constructor() { }

  ngOnInit(): void {
  }

}
