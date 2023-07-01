import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapComponent} from "./pages/map/map.component";
import {HomeComponent} from "./pages/home/home.component";
import {MenetrendComponent} from "./pages/timetable/menetrend.component";

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
