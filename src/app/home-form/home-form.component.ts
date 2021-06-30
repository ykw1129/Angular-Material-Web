import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { interval, fromEvent } from 'rxjs';
import { take } from 'rxjs/operators'
@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.less'],
})
export class HomeFormComponent implements OnInit {
  public SEX_LIST:string[] = ['Man','Woman']
  public myForm!: FormGroup;
  public user = { name: '', sex: 'Man' }
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
  onSubmit() {
    console.table(this.myForm.valid)
  }
}
