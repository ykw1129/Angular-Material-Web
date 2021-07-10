import { Component, Input, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})

export class HeaderComponent implements OnInit  {
  public showFiller:boolean
  public slideNavLink:any[]
  constructor(private router:Router) {
      this.showFiller = false
      this.slideNavLink =  this.getRouteArray(this.router.config)
  }
  ngOnInit() {
  }
  getRouteArray(arr:any[]){
      let routeArray = JSON.parse(JSON.stringify(arr))
      routeArray.splice(0,1)
      return routeArray
  }
}
