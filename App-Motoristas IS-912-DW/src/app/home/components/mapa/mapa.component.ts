import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as mapbox from 'mapbox-gl';
import { environment } from '../../../../environments/environment'
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  mapa: mapbox.Map & any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>
  ) { }

  ngOnInit(): void {
    const {lng, lat} = this.data;
    (mapbox as any).accessToken = environment.mapBoxKey;

    this.mapa = new mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 9,
    });

    const marker = new mapbox.Marker({
      color: '#e74c3c'
    }).setLngLat( [lng, lat])
      .addTo(this.mapa);


  }


}
