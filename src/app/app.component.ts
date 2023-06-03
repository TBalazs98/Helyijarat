import {Component, OnInit} from '@angular/core';
import {latLng, tileLayer} from "leaflet";
import i18next from "i18next";
import Backend from 'i18next-http-backend';
import {Languages} from "./models/Enums/Languages";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Helyijarat';

  language: string = Languages.HU

  ngOnInit(): void {
    i18next
      .use(Backend)
      .init({
        initImmediate: false,
        fallbackLng: Languages.HU,
        lng: this.language,
        backend: {
          loadPath: `data/Localization/${this.language}.json`
        }
      }).then( x => {console.log(i18next.t('Name'))})




  }

}
