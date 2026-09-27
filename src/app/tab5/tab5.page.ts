import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: false,

})
export class Tab5Page implements OnInit {
  private map!: L.Map;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() { // Se ejecuta cuando la vista ya está cargada
    this.loadMap();
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    const position = await Geolocation.getCurrentPosition();
    this.map.setView([position.coords.latitude, position.coords.longitude], 15);
  }

  loadMap() {
    this.map = L.map('mapa').setView([19.4326, -99.1332], 13); // Coordenadas de CDMX

    // Agregamos el mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    // Agregamos un marcador en CDMX
    L.marker([19.4326, -99.1332]).addTo(this.map)
      .bindPopup('Ciudad de México')
      
      .openPopup();

    // Asegurar que el mapa se renderice correctamente
    setTimeout(() => {
      this.map.invalidateSize();
    }, 500);
  }
}
