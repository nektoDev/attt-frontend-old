import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byte'
})
export class BytePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (isNaN(parseFloat(value)) || !isFinite(value)) return '-';
    let precision = 1;
    let units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
      number = Math.floor(Math.log(value) / Math.log(1024));
    return (value / Math.pow(1024, Math.floor(number))).toFixed(precision) +  ' ' + units[number];
  }

}
