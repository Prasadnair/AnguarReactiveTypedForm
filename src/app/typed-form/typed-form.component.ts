import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-typed-form',
  templateUrl: './typed-form.component.html',
  styleUrls: ['./typed-form.component.sass']
})
export class TypedFormComponent implements OnInit {
  
  
  ngOnInit(): void {
    
  }

    typedForm =new FormGroup({

    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    message:new FormControl('',Validators.required)
  });
  submittedData : string ="We are testing Reactive Typed Forms! ";
  constructor(){

  }

  onSubmit(){
  
    if(!this.typedForm.valid){
      this.submittedData = "Mandatory Fields needs to be filled";
    }
    else{
      this.submittedData=`Name : ${this.typedForm.value.name}, Email : ${this.typedForm.value.email}, Message : ${this.typedForm.value.message}`;
    }

}
onResetSubmit(){
  this.typedForm.reset();
  this.submittedData="We are testing Reactive Typed Forms!";
}
}
