import { Directive, ElementRef, HostListener, Input , OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBookingTime]'
})
export class BookingTimeDirective implements OnChanges{
    el : any;
    @Input() highlightColor: string;

    constructor(el: ElementRef) {
      this.el = el;
      //  el.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('mouseenter') onMouseEnter() {
      this.highlight(this.highlightColor);
    }
    
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }
    
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }

    ngOnChanges(changes: SimpleChanges){
      if(changes){
        console.log('input changed', changes);
        // console.log(changes)
        // console.log(changes.currentSlot.currentValue.id)
        // console.log(changes.selectedSlots.currentValue)

        // if(changes.selectedSlots.currentValue.includes(changes.currentSlot.currentValue.id)){
        //   this.highlight(this.activatedSlotColor);
        // }
      }
    }

}