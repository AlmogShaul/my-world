import {Component, OnInit} from '@angular/core';
import data from '../../data/companies.json';
import {icon, latLng, marker, tileLayer} from 'leaflet';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.less']
})
export class CompaniesComponent implements OnInit {
  // Marker for the top of Mt. Ranier
  summit = marker([ 46.8523, -121.7603 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'assets/maps/map-marker.jpg'
    })
  });
  options = {
    layers: [
      this.summit,
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 7,
    center: latLng([ 46.879966, -121.726909 ])
  };
  constructor() {
    this.companies = data.filter(x => x.status === 'Hiring');
    this.center = {lat: 24, lng: 12};
  }

  public companies: any[];
  public center: { lng: number; lat: number };

  private previous;

  ngOnInit(): void {
  }

  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }
}
