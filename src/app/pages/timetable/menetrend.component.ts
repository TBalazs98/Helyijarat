import { Component } from '@angular/core';

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
export class MenetrendComponent {

  countries = COUNTRIES;

}
