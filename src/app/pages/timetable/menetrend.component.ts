import {Component, OnInit} from '@angular/core';
import Stop from "../../models/stop/Stop";
import {debounceTime, distinctUntilChanged, map, Observable, OperatorFunction} from "rxjs";
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {DataService} from "../../services/data.service";

interface Country {
  name: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    area: 17075200,
    population: 146989754,
  },
  {
    name: 'Canada',
    area: 9976140,
    population: 36624199,
  },
  {
    name: 'United States',
    area: 9629091,
    population: 324459463,
  },
  {
    name: 'China',
    area: 9596960,
    population: 1409517397,
  },
];

@Component({
  selector: 'app-timetable',
  templateUrl: './menetrend.component.html',
  styleUrls: ['./menetrend.component.scss']
})
export class MenetrendComponent implements OnInit{

  countries = COUNTRIES;
  stops: Stop[] = []
  searchModel!: Stop;
  modelDate: NgbDateStruct = this.calendar.getToday()

  constructor(private calendar: NgbCalendar, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.stops.subscribe(x => {
      this.stops = x
    })
  }

  autoComplete: OperatorFunction<string, readonly Stop[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(x =>
        x.length > 0 ? this.stops.filter(s => s.name.toLowerCase().startsWith(x.toLowerCase())).slice(0,10) : this.stops.slice(0,10)
      ),
    );

  resultFormatter(item: Stop): string{
    return item.name
  }

  inputFormatter(item: Stop){
    return item.name
  }




}
