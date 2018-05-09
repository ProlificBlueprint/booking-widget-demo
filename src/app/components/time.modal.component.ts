import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from './../models/user.model';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './time.modal.component.html',
  styleUrls: ['./time.modal.component.css']
})
export class TimeModalComponent implements OnInit {
  @Input() time;
  UserForm : FormGroup;
  user: User;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder ) {
    this.user = new User();
  }

  ngOnInit(){
    //
    if(this.time.name){
      this.user.name = this.time.name;
      this.user.phone = this.time.phone;
    }
    //
    this.createForm();
  }

  createForm() {
    //
    this.UserForm = this.fb.group({
      name: [ this.user.name , Validators.required],
      phone: [ this.user.phone , Validators.required]
    });
    //
    this.UserForm.valueChanges.subscribe((formValues) => {
        // console.log(formValues);
        this.user =  formValues;
      });
  }


  clear(){
    this.user = new User();
  }

  bookTime(){
    if( this.UserForm.valid){
      this.activeModal.close(this.user);
    } else {
      this.activeModal.close(null);
    }
  }
}