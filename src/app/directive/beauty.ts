import {Directive,ElementRef,Input,HostListener} from '@angular/core'

@Directive({
    selector:'[beauty]'
  })
  export class BeautyDirective{
    @Input() color:string='red';
    constructor(el:ElementRef){
      el.nativeElement.style.color = this.color
    }

  }