import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// libraries

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';

// components
// import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { BookingTimeDirective } from './directives/app.booking-time.directive';
import { TimeModalComponent } from './components/time.modal.component'
// import { ModalDialogModule } from 'ngx-modal-dialog';
// 

@NgModule({
  declarations: [
    AppComponent,
    TimeModalComponent,
    BookingTimeDirective
  ],
  imports: [
    BrowserModule,
    MomentModule,
    FormsModule,ReactiveFormsModule,
    NgbModule.forRoot()
    // ModalDialogModule.forRoot()
  ],
  entryComponents: [ TimeModalComponent ],
  // providers: [ NgbModalBackdrop ],
  bootstrap: [AppComponent]
})
export class AppModule { }
