import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapComponent} from "./map/map.component";
import {HomeComponent} from "./home/home.component";
import {MenetrendComponent} from "./timetable/menetrend.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'map', component: MapComponent},
  {path: 'menetrend', component: MenetrendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
