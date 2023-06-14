import Route from "./Route";

export default interface Timetable{
  name: string,
  routes: Route[],
  dateOfUpload: Date,
}
