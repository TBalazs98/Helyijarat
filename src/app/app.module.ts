import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenetrendComponent } from './menetrend/menetrend.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    NavbarComponent,
    MenetrendComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
