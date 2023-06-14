import {Component, OnInit, ViewChild} from '@angular/core';
import {readJSON} from "fs-extra";
import {HttpClient} from "@angular/common/http";
import Stop from "../models/stop/Stop";
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {debounceTime, distinctUntilChanged, map, Observable, OperatorFunction} from "rxjs";
import Time from "../models/utility/Time";
import {NgForm} from "@angular/forms";

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District Of Columbia',
  'Federated States Of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Islands',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  @ViewChild(NgForm) form!: NgForm;

  tomb: number[] = Array.from(Array(30).keys())

  time: Time =  {hour: 12, minute: 45}
  modelDate: NgbDateStruct = this.calendar.getToday()
  modelTypeahead: any;

  constructor(private calendar: NgbCalendar) {}

  ngOnInit(): void {


  }

  selectToday() {
    this.modelDate = this.calendar.getToday();
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2 ? [] : states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    );


  searchStop(){
    console.log(this.time)
    console.log(this.modelDate)
    console.log(this.modelTypeahead)

    console.log(this.form.valid)
  }



}
