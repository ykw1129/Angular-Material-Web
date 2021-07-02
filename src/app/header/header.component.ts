import { Component, Input, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router'
class MyService {
  constructor(){
    console.log(123)
  }
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})

export class HeaderComponent implements OnInit  {
  @Input()red='red'
  public opened:boolean
  constructor(private route:ActivatedRoute,private router:Router) {
    this.opened = false
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
    })
  }

}
