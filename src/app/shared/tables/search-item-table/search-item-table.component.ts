import { Component } from '@angular/core';
import RouteStop from "../../../models/stop/RouteStop";

const routeStops: RouteStop[] = [
  {
    stopId: 1,
    stopName: "Homok",
    time: {
      hour: 8,
      minute: 10
    }
  },
  {
    stopId: 3,
    stopName: "Balogh sarok",
    time: {
      hour: 10,
      minute: 10
    }
  },
  {
    stopId: 5,
    stopName: "Homok",
    time: {
      hour: 8,
      minute: 10
    }
  }
]


@Component({
  selector: 'app-search-item-table',
  templateUrl: './search-item-table.component.html',
  styleUrls: ['./search-item-table.component.scss']
})
export class SearchItemTableComponent {
  stops = routeStops
}
