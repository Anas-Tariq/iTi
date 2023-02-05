import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[OnHoverChange]',
})
export class OnHoverChangeDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.boreder = '1px #fff solid';
    el.nativeElement.style.backgroundColor = '#5789D8';
    el.nativeElement.style.color = '#fff';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = '#fff';
    this.el.nativeElement.style.color = '#5789D8';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '#5789D8';
    this.el.nativeElement.style.color = '#fff';
  }
}
