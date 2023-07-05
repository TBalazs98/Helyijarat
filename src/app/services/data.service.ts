import {Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Stop from "../models/stop/Stop";
import {BehaviorSubject, takeUntil} from "rxjs";
import Track from "../models/track/Track";
import {LatLng, Polyline} from "leaflet";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  stops: BehaviorSubject<Stop[]> = new BehaviorSubject<Stop[]>([])
  track: BehaviorSubject<Track[]> = new BehaviorSubject<Track[]>([])
  asd: BehaviorSubject<LatLng[]> = new BehaviorSubject<LatLng[]>([])

  constructor(private http: HttpClient) { }

  init(){
    this.getStops(environment.stop)
    this.getTrack(environment.track)
    this.getPath(environment.path)
  }


  private getStops(stop: string){
    this.http.get<Stop[]>(`../../data/stops/${stop}.json`).subscribe(x => {
      this.stops.next(x)
    })
  }

  private getTrack(tracks: string[]){
    tracks.map(track => {
      this.http.get<Track>(`../../data/tracks/${track}.json`).subscribe(x => {
        this.track.next([...this.track.value,x])
      })
    })
  }

  private getPath(path: string){
    this.http.get<LatLng[]>("../../data/asd.json").subscribe(x => {
      this.asd.next(x)
    })
  }


}
