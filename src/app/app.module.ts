import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenetrendComponent } from './timetable/menetrend.component';
import {CommonModule} from "@angular/common";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { SidePanelComponent } from './map/side-panel/side-panel.component';
import {DataService} from "./services/data.service";
import { StopItemCardComponent } from './cards/stop-item-card/stop-item-card.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { SearchItemComponent } from './cards/search-item/search-item.component';
import { MapPanelItemComponent } from './cards/map-panel-item/map-panel-item.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './data/localization/', '.json');
}

export function InitData(dataService: DataService){
  return () => dataService.init();
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    NavbarComponent,
    MenetrendComponent,
    SidePanelComponent,
    StopItemCardComponent,
    FooterComponent,
    SearchItemComponent,
    MapPanelItemComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    LeafletModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule
  ],
  exports:[
    CommonModule
  ],
  providers: [
    DataService,
    {
      provide: APP_INITIALIZER,
      useFactory: InitData,
      deps: [DataService],
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
