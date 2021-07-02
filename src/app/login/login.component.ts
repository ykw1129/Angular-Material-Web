import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public progressLength:number
  constructor() {
    this.progressLength = 40
   }

  ngOnInit(): void {
  }

}
