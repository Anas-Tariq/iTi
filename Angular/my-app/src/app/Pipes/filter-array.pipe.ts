import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray',
})
export class FilterArrayPipe implements PipeTransform {
  transform(arr: any[]): any[] {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
}
