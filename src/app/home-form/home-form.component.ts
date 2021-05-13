import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'
@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.less']
})
export class HomeFormComponent {
  name = new FormControl('')
  isMan = new FormControl('')
  constructor() { }
}
