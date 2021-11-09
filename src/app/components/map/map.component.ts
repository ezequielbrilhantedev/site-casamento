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

  constructor() { }

  ngOnInit(): void {
    (Mapboxgl as any).accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'map-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-38.6533602, -3.7645704], // starting position [lng, lat]
      // @-3.7645704,-38.6533602
      zoom: 17 // starting zoom
    });
  }

}
