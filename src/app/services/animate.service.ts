import {Injectable, signal, WritableSignal} from '@angular/core';
import {BehaviorSubject, Subscription, timer} from "rxjs";
import Path from "../models/path/Path";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import Time from "../models/utility/Time";
import Utility from "../shared/utilitys/Utility";
import {LatLng} from "leaflet";
import PathElement from "../models/path/PathElement";

@Injectable({
  providedIn: 'root'
})
export class AnimateService {

  paths: BehaviorSubject<Path[]> = new BehaviorSubject<Path[]>([])
  path: BehaviorSubject<Path | undefined> = new BehaviorSubject<Path | undefined>(undefined)
  timerSubscription!: Subscription;
  busLocation: WritableSignal<LatLng | undefined> = signal<LatLng | undefined>(undefined)

  constructor(private http: HttpClient) { }

  init(){
    this.getPath(environment.path)
  }

  private getPath(path: string){
    this.http.get<Path[]>(`../../data/paths/${path}.json`).subscribe(x => {
      this.paths.next(x)
    })
  }

  private checkIfPathStarts(){

  }

  initTimer(time: Time){
    this.timerSubscription = timer(Utility.timeToDate(time)).subscribe(() =>{
      this.busLocation.set(new LatLng(11,11))
    })
  }




  setTimer(){
    this.timerSubscription.unsubscribe()

    this.timerSubscription = timer(5000).subscribe(() =>{
      this.busLocation.set(new LatLng(11,11))
    })
  }

  step(){

  }

  getBusLocation(){
    let currentElement: PathElement | undefined = undefined;

    if(this.path.value) {
      for (let i = 0; this.path.value.elements.length; i++) {
        if (Utility.isTimeBigger(this.path.value.elements[i].startTime)) {
          if (i > 0) {
            currentElement = this.path.value.elements[i - 1]
            break;
          }
        }
      }

      if (currentElement) {
        let now = new Date()

        let length = Utility.pathLength(currentElement.points);
        let fullTime = currentElement.time;
        let partTime = ((now.getHours() - currentElement.startTime.hour) * 3600 + (now.getMinutes() - currentElement.startTime.minute) + now.getSeconds())

        let travelledPercent = (partTime / fullTime)

        let points = this.pointsForInterpolation(currentElement.points, (travelledPercent * length))

        return this.linearInterpolation(points, travelledPercent);
      }
    }
    return undefined;
  }

  private pointsForInterpolation(points: LatLng[], limit: number){
    let sumLength = 0;

    for(let i = 0; i<points.length-1; i++){
      let x = points[i].distanceTo(points[i+1])

      if((x + sumLength) >= limit){
        return [points[i], points[i+1]]
      }
    }

    return [points[points.length - 2], points[points.length - 1]]
  }

  private linearInterpolation(points: LatLng[], percent: number){
    let lat = points[0].lat + percent * (points[1].lat - points[0].lat);
    let lng = points[0].lng + percent * (points[1].lng - points[0].lng);

    return new LatLng(lat, lng);
  }

}
