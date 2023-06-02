import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, merge, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy{
  width!: number
  resizeObservable$!: Observable<Event>
  openObservable$!: Observable<Event>
  resizeSubscription$!: Subscription

  constructor() { }

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.openObservable$ = fromEvent(window, 'pageshow')

    let merged = merge(
      this.resizeObservable$,
      this.openObservable$
    );

    this.resizeSubscription$ = merged.subscribe( evt => {
      this.width = window.innerWidth
    })

  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }




}
