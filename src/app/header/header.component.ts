import { Component, Input, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit  {
  constructor(private route:ActivatedRoute,private router:Router) { }
  headerClick(){
    // 编程式路由
    this.router.navigate(['/home']);
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      console.log(params)
    })
  }

}
