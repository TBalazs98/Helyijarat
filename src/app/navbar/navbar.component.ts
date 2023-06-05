import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, merge, Observable, Subscription} from "rxjs";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy{
  width: number = window.innerWidth
  resizeObservable$!: Observable<Event>
  openObservable$!: Observable<Event>
  resizeSubscription$!: Subscription

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.openObservable$ = fromEvent(window, 'pageshow')

    let merged = merge(
      this.resizeObservable$,
      this.openObservable$
    );

    this.resizeSubscription$ = merged.subscribe( evt => {
      console.log(window.innerWidth)
      this.width = window.innerWidth
    })

  }

  changeLanguage(){
    this.translate.use("en").subscribe()
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }




}
