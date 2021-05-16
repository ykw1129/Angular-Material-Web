import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.less'],
})
export class HomeFormComponent implements OnInit{
  name = new FormControl()
  sex = new FormControl('Man')
  constructor() {

   }
  radioChange(){
    console.log(this.sex)
  }

  ngOnInit(){

  }
  ngDoCheck(){
    console.log('ngDoCheck')
  }

}
