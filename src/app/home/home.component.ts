import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public tabs:any[]
  constructor() {
    this.tabs = ['Angular','React','Vue']
   }
  ngOnInit() {
  }
  logChange(index:any){
    console.log(index)
  }

}
