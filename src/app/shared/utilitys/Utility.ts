import {LatLng} from "leaflet";
import Time from "../../models/utility/Time";
import Path from "../../models/path/Path";
import PathElement from "../../models/path/PathElement";

export default class Utility{

  static pathLength(points: LatLng[]): number{
    let sum = 0;

    for(let i=0; (i<points.length - 1); i++){
      sum += points[i].distanceTo(points[i+1])
    }

    return sum;
  }



  static timeToDate(time: Time){
   let now = new Date()

    now.setHours(time.hour)
    now.setMinutes(time.minute)

    return now;
  }



  static isTimeBigger(time: Time): boolean{
    let now = new Date()

    if(now.getHours() < time.hour){
      return true;
    }

    if(now.getHours() > time.hour){
      return false;
    }

    return now.getMinutes() < time.minute;
  }




}
