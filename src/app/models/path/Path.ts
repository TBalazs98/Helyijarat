import PathElement from "./PathElement";
import Time from "../utility/Time";

export default interface Path{
  pathStart: Time;
  endStart: Time;
  saturday: boolean;
  elements: PathElement[]
}
