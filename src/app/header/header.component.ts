import { Component, Input, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})

export class HeaderComponent implements OnInit  {

  constructor(private route:ActivatedRoute,private router:Router) {

  }
  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      console.log(params)
    })
  }
}
