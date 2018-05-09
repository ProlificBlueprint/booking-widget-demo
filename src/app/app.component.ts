import { Component, OnInit , ViewContainerRef} from '@angular/core';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TimeModalComponent } from './components/time.modal.component'
// import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  closeResult: string;
  startTime : Date = new Date()
  bookingOptions : Array<Object>
  currentTimeSlot : Object;

  // private modalDialogService: ModalDialogService,
  
  constructor( private modalService: NgbModal ) {
    // init at desired start time of schedule
    this.startTime.setHours(9);
    this.startTime.setMinutes(0);
    this.bookingOptions = [];
  }

  ngOnInit(){
    this.generateBookingOptions(this.startTime);
  }

  generateBookingOptions(start){
    // init start time of day
    var lastHour = start;
    // length of a normal days schedule
    var dayLength = 8;
    var scheduleIncrement = 1;

    // loop through
    for( var i = 0; i < ( dayLength/scheduleIncrement ) ; i++ ){
      // set end time each loop
      let endHr  = lastHour.getHours() + scheduleIncrement;
      let id = lastHour.getYear() + lastHour.getMonth() + lastHour.getDate() + lastHour.getHours() + lastHour.getMinutes() + lastHour.getSeconds()
      
      let outObject = {
        id : id,
        start : lastHour,
        end : new Date(),
        name : null,
        phone : null
      }

      // generate schedule object
      outObject.end.setHours(endHr);
      outObject.end.setMinutes(0);

      // push generated schedule 
      this.bookingOptions.push(outObject);

      // reset new start time end of loop
      lastHour = outObject.end;
    }
  }

  bookTime(time) {
    const modalRef = this.modalService.open(TimeModalComponent, time);
    modalRef.componentInstance.time = time;
  }
}
