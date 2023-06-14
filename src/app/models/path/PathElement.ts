import {LatLng} from "leaflet";

export default interface PathElement{
  length: number
  points: LatLng[]
}
