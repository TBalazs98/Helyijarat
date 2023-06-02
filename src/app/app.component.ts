import {Component, OnInit} from '@angular/core';
import {latLng, tileLayer} from "leaflet";
import i18next from "i18next";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Helyijarat';

  ngOnInit(): void {}



}
