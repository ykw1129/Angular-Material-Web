import { Component, Injectable, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.less'],
})
export class HomeFormComponent implements OnInit {
  public myForm!: FormGroup;
  public user = { name: '', sex: 'Man' }
  red="#888"
  public model = new Person('','Man')
  constructor() {

  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(6)
      ]),
      sex: new FormControl(this.user.sex, [
        Validators.required,
        Validators.minLength(1)
      ])
    })
  }
  get form() {
    return this.myForm.controls
  }
  ngDoCheck() {
    console.log(this.model)
  }
  onSubmit() {
    console.table(this.myForm.valid)
  }
}

class Person {
  constructor(public name: string, public sex: string) {

  }
}
