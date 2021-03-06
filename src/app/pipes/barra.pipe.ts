import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'barra'
})
export class BarraPipe implements PipeTransform {

  transform(value: any): string {
    let noimage= "assets/img/noimage.png";
    if (!value) {
        return noimage;
    }
    return (value.length > 0)? value[2].url : noimage;
  }

}
