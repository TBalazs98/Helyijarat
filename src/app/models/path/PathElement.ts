import {LatLng} from "leaflet";
import Time from "../utility/Time";

export default interface PathElement{
  time: number;
  startTime: Time;
  points: LatLng[]
}
