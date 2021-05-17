import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.less'],
})
export class HomeFormComponent implements OnInit{
  myForm = new FormGroup({
    name : new FormControl(),
    sex : new FormControl('Man'),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  })

  constructor() {

   }

  ngOnInit(){

  }
  ngDoCheck(){
    console.log('ngDoCheck')
  }
  onSubmit(){
    console.table(this.myForm.value)
  }

}
