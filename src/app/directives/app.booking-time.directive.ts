import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appBookingTime]'
})
export class BookingTimeDirective {
    el : any;
    @Input() highlightColor: string;

    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('yellow');
    }
    
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }
    
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }

}