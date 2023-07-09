import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {
  Circle,
  CircleMarker,
  control,
  icon,
  Icon, latLng,
  LatLng,
  LatLngBounds,
  Layer,
  MapOptions,
  Marker, Polyline,
  tileLayer
} from "leaflet";
import {Subscription} from "rxjs";
import {DataService} from "../../services/data.service";
import zoom = control.zoom;

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
  stopMarkers: CircleMarker[] = []
  zoom: number = 13
  center:LatLng = new LatLng(46.9688, 20.2442);
  fitBound: LatLngBounds = new LatLngBounds({lat: 46.91, lng: 20.19}, {lat: 47.05, lng: 20.31});

  marker: Marker = new Marker(this.center, {draggable: false,    icon: icon({
       iconSize: [ 20, 20 ],
       iconUrl: 'assets/circle-solid.png',
       iconRetinaUrl: 'assets/circle-solid.png',
       shadowUrl: 'leaflet/marker-shadow.png'
     })})


  ngOnInit(): void {
    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, minZoom: 13}),

      ],
      zoom: this.zoom,
      center: this.center,
    };

    this.stops = this.data.stops.subscribe(data => {
        data.map(stop =>{
          this.stopMarkers.push(new Circle({lat: stop.location.lat, lng: stop.location.lng},{radius: 12, fill: true, fillOpacity: 1, color: "#005ca1" })
            .addEventListener("click", () => {
              this.selectedStop = stop.location.lat
            }))
        })
      this.detector.detectChanges()
    })

    this.data.track.subscribe(x => {
      x.map(track => {
        this.layers.push(new Polyline(track.points, {color: "#005ca1"}))
      })

      this.detector.detectChanges()
    })
  }

  closePanel(){
    this.selectedStop = undefined
  }

  ngOnDestroy(): void {
    this.stops.unsubscribe()
  }


}

/*marker: Marker = new Marker(this.center, {draggable: false,    icon: icon({
     iconSize: [ 20, 20 ],
     iconUrl: 'assets/circle-solid.png',
     iconRetinaUrl: 'assets/circle-solid.png',
     shadowUrl: 'leaflet/marker-shadow.png'
   })})*/
