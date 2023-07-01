import { Pipe, PipeTransform } from '@angular/core';
import Time from "../models/utility/Time";

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(time: Time): string {
    let data = "";

    if(!time){
      return "00 : 00"
    }

    if(time.hour < 10){
      data = data.concat(`0${time.hour}`)
    }
    else {
      data = data.concat(time.hour.toString())
    }

    data = data.concat(" : ");

    if(time.minute < 10){
      data = data.concat(`0${time.minute}`)
    }
    else {
      data = data.concat(time.minute.toString())
    }

    return data;
  }
}
