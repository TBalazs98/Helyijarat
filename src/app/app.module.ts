import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenetrendComponent } from './pages/timetable/menetrend.component';
import {CommonModule} from "@angular/common";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { SidePanelComponent } from './pages/map/side-panel/side-panel.component';
import {DataService} from "./services/data.service";
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './shared/footer/footer.component';
import { SearchItemComponent } from './shared/cards/search-item/search-item.component';
import { MapPanelItemComponent } from './shared/cards/map-panel-item/map-panel-item.component';
import { TimePipe } from './pipes/time.pipe';
import { SearchItemTableComponent } from './shared/tables/search-item-table/search-item-table.component';
import {AnimateService} from "./services/animate.service";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './data/localization/', '.json');
}

export function InitData(dataService: DataService, animateService: AnimateService){
  return () => {
    dataService.init();
    animateService.init();
  };
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    NavbarComponent,
    MenetrendComponent,
    SidePanelComponent,
    FooterComponent,
    SearchItemComponent,
    MapPanelItemComponent,
    TimePipe,
    SearchItemTableComponent,
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
    AnimateService,
    {
      provide: APP_INITIALIZER,
      useFactory: InitData,
      deps: [DataService, AnimateService],
      multi: true
    },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
