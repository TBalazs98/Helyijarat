import {Component, OnInit, ViewChild} from '@angular/core';
import Stop from "../../models/stop/Stop";
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {debounceTime, distinctUntilChanged, map, Observable, OperatorFunction} from "rxjs";
import Time from "../../models/utility/Time";
import {NgForm} from "@angular/forms";
import {DataService} from "../../services/data.service";
import {Options} from "@popperjs/core";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  @ViewChild(NgForm) form!: NgForm;
  private initDate = new Date()

  //Form data
  time: Time =  {hour: this.initDate.getHours(), minute: this.initDate.getMinutes()}
  modelDate: NgbDateStruct = this.calendar.getToday()
  searchModel!: Stop;

  stops: Stop[] = []


  constructor(private calendar: NgbCalendar, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.stops.subscribe(x => {
        this.stops = x
    })
  }

  selectToday() {
    this.modelDate = this.calendar.getToday();
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

  firstClick(){
  }

  search(){
    //console.log(this.time)
    //console.log(this.modelDate)
    //console.log(this.searchModel)

    console.log(this.form.valid)
  }

}
