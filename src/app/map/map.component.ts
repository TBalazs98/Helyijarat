import {ChangeDetectorRef, Component, effect, ElementRef, OnDestroy, OnInit, signal, ViewChild} from '@angular/core';
import {Circle, Icon, LatLng, latLng, LatLngBounds, Layer, MapOptions, Marker, tileLayer} from "leaflet";
import {NgbOffcanvas} from "@ng-bootstrap/ng-bootstrap";
import {SidePanelComponent} from "./side-panel/side-panel.component";
import {BehaviorSubject, Subscription} from "rxjs";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy{

  constructor(private detector: ChangeDetectorRef, private data: DataService) {}


  selectedStop: number | undefined = undefined
  stops!: Subscription
  options!: MapOptions;
  layers: Layer[] = [];
  center = latLng(46.9688, 20.2442);
  fitBound: LatLngBounds = new LatLngBounds({lat: 46.91, lng: 20.19}, {lat: 47.05, lng: 20.31});
  marker: Marker = new Marker(this.center, {draggable: false, icon: new Icon({iconUrl: "assets/hu.svg"})})

  ngOnInit(): void {
    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, minZoom: 13})
      ],
      zoom: 13,
      center: this.center,
    };

    //mouseover
    this.marker.addEventListener("click", (event) => {

      console.log("ittvagy")
    })

    this.layers = [this.marker]

    this.stops = this.data.stops.subscribe(data => {
        data.map(stop =>{
          this.layers.push(new Circle({lat: stop.lat, lng: stop.lng},{radius: 15, fill: true, fillOpacity: 1})
            .addEventListener("click", () => {
              this.selectedStop = stop.lat
              this.detector.detectChanges()
            }))
        })
      })
  }

  closePanel(){
    this.selectedStop = undefined
  }

  ngOnDestroy(): void {
    this.stops.unsubscribe()
  }


}
