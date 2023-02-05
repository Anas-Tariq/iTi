import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[imgScale]',
})
export class ImgScaleDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.width = '50px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.width = '100px';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.width = '50px';
  }
}
