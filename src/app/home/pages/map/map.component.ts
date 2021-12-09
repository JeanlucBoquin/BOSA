import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from "mapbox-gl";
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit, OnDestroy {
  @ViewChild("map") map!: ElementRef;
  mapa!: mapboxgl.Map;
  center: mapboxgl.LngLat = new mapboxgl.LngLat(-87.17909, 14.007209269298926)
  lng: number = -86.33086937621516;
  lat: number = 14.007209269298926;

  constructor(private router: Router) { }

  ngOnDestroy(): void {
    this.mapa.off("move", () => { })
  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.map.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: 5.5
    });

    const marker: mapboxgl.Marker = new mapboxgl.Marker({
      color: "#e74c3c"
    }).setLngLat(this.center).addTo(this.mapa);

    this.mapa.on("move", (event) => {
      const { lng, lat } = this.mapa.getCenter()
      this.lng = lng;
      this.lat = lat;
      marker.setLngLat(this.mapa.getCenter())
    });
  }

  almacenarCoordenadas(){
    localStorage.setItem("lnglat",JSON.stringify(this.mapa.getCenter()));
    this.router.navigateByUrl("/home/payment")
  }
}
