import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  public opened:boolean
  public listItem:any[]
  constructor() {
    this.opened = false
    this.listItem = ['home','about','concat']
  }
  ngOnInit() {
  }
  log(e:string){
    console.log(e)
  }
}
