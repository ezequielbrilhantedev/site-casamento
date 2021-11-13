import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  mapa: any;

  pointMarker: any;

  marker: any;

  constructor() { }

  ngOnInit(): void {
    (Mapboxgl as any).accessToken = environment.MAPBOX_KEY;

    this.mapa = new Mapboxgl.Map({
      container: 'map-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      // center: [-38.6533602, -3.7645704], // starting position [lng, lat]
      center: [-38.5585839, -3.7314505], // starting position [lng, lat]
      // @-3.7645704,-38.6533602
      zoom: 16 // starting zoom
    });

    this.marker = new Mapboxgl.Marker({
      color: "#f0630e",
      draggable: true,
    }).setLngLat([-38.5585839, -3.7314505])
      .addTo(this.mapa);;

  }

}
