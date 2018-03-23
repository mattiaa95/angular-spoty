import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'audio'
})
export class AudioPipe implements PipeTransform {

  transform(value: any): any {
    let noimage= "assets/img/noimage.png";
    if (!value) {
        return noimage;
    }
    return value;
    }
  }
