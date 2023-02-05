import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(imgSrc: string, defaultSrc: string): string {
    if (imgSrc == '') {
      return defaultSrc;
    } else {
      return imgSrc;
    }
  }
}
