import Route from "./Route";

export default interface Timetable{
  name: string,
  routes: Route[],
  validFrom: Date
  validUntil: Date
  dateOfUpload: Date,
}
