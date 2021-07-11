import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  @Input() title:string = ''
  @Output() sideToggle = new EventEmitter<boolean>();
  isOpened = false
  constructor() { }

  ngOnInit(): void {

  }
  Toggle(){
    this.sideToggle.emit(!this.isOpened)
  }

}
