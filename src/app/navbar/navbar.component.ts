import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, merge, Observable, Subscription} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {Languages} from "../models/Enums/Languages";

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
  currentLang!: string

  constructor(private translate: TranslateService) { }

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

    switch(this.translate.currentLang){
      case Languages.HU:
        this.currentLang = Languages.EN
        break;
      case Languages.EN:
        this.currentLang = Languages.HU
        break;
      default :
        this.currentLang = Languages.EN
    }
  }

  changeLanguage(event: MouseEvent){
    switch (this.translate.currentLang) {
      case Languages.HU:
        this.translate.use(Languages.EN).subscribe();
        this.currentLang = Languages.HU
        break;
      case Languages.EN:
        this.translate.use(Languages.HU).subscribe();
        this.currentLang = Languages.EN
        break;
      default:
        this.translate.use(Languages.HU).subscribe();
        break;
    }

    event.preventDefault()
  }


  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }




}
