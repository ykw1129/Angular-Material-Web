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
  constructor(private route:ActivatedRoute,private router:Router) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      console.log(params)
    })
  }

}
