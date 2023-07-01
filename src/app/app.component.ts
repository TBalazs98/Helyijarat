import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import Stop from "./models/stop/Stop";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Helyijarat';

  constructor(public translate: TranslateService, private http: HttpClient) {
    translate.addLangs(['hu', 'en']);
    translate.setDefaultLang('hu');


    const browserLang = translate.getBrowserLang();

    if(!!browserLang){
      translate.use(browserLang.match(/hu|en/) ? browserLang : 'hu');
    }
  }
}
