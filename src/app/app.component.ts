import { Component, OnInit , ViewContainerRef} from '@angular/core';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TimeModalComponent } from './components/time.modal.component'
// import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { BookingTimeDirective } from './directives/app.booking-time.directive';

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
  selectedSlotsArray : Array<String>
  scheduleHourIncrement : number = 1;
  // private modalDialogService: ModalDialogService,
  
  constructor( private modalService: NgbModal ) {
    // init at desired start time of schedule
    this.startTime.setHours(9);
    this.startTime.setMinutes(0);
    this.bookingOptions = [];
    this.selectedSlotsArray = [];
    // adjusts time frame of each slot
    this.scheduleHourIncrement = 1;
  }

  ngOnInit(){
    this.generateBookingOptions(this.startTime);
  }

  generateBookingOptions(start){
    // init start time of day
    var lastHour = start;
    // length of a normal days schedule
    var dayLength = 8;

    // loop through
    for( var i = 0; i < ( dayLength/this.scheduleHourIncrement ) ; i++ ){
      // set end time each loop
      let endHr  = lastHour.getHours() + this.scheduleHourIncrement;
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
    const modalRef = this.modalService.open(TimeModalComponent, time)
    modalRef.componentInstance.time = time;
    modalRef.result.then((user) => {
      console.log(user);
      if(user){
        console.log('has user : ', user);
        this.activateSlot(user, time)
      } else {
        //
        console.log('no user : ', user);
        this.deactivateSlot(time)
      }
    });
  }

  activateSlot( user, time ) {
    time.name = user.name;
    time.phone = user.phone;
    this.selectedSlotsArray.push(time.id);
  }

  deactivateSlot(time){
    
    var index = this.selectedSlotsArray.indexOf(time.id)
    if(index != -1){
      time.name = null;
      time.phone = null;
      this.selectedSlotsArray.splice(index, 1);
    }
  }
}
