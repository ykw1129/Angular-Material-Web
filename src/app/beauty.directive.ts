import {Directive,ElementRef,Input,HostListener, OnInit} from '@angular/core'

@Directive({
    selector:'[beauty]'
})
  export class BeautyDirective implements OnInit{
    @Input() beauty!:string;
    constructor(private el:ElementRef){
    }
    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = this.beauty||'yellow'
    }
  }