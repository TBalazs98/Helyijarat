import Time from "../utility/Time";
import Stop from "../stop/Stop";
import RouteStop from "../stop/RouteStop";

export default interface RouteElement{
  time: Time,
  stop: RouteStop
}
