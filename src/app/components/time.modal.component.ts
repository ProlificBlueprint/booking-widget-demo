// import { Component, OnInit, Input, ComponentRef } from '@angular/core';
// // import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
// // import { IModalDialog, IModalDialogButton, IModalDialogOptions } from 'ngx-modal-dialog';

// @Component({
//   selector: 'time.modal',
//   templateUrl: './time.modal.component.html',
//   styleUrls: ['./time.modal.component.css']
// })
// export class TimeModalComponent implements OnInit {
  
//   @Input() name;
//   // actionButtons: IModalDialogButton[];

//   constructor() {
//     // this.actionButtons = [
//     //   { text: 'Close' }, // no special processing here
//     //   { text: 'I will always close', onAction: () => true },
//     //   { text: 'I never close', onAction: () => false }
//     // ];
//   }

//   // dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
//   //   // no processing needed
//   // }

//   ngOnInit(){
//     console.log('time hit')
//   }

// }


import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class TimeModalComponent {
  @Input() time;

  constructor(public activeModal: NgbActiveModal) {}
}