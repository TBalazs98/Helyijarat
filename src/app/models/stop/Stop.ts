
//kell plusz hidden name
import {LatLng} from "leaflet";

export default interface Stop{
  id: number
  //lat: number
  //lng: number
  location: LatLng
  name: string
}
