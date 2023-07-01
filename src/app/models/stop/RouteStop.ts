export default interface RouteStop{
  stopId: number,
  stopName: string,
  time: {
    hour: number,
    minute: number
  }
}
