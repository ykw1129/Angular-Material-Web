import { Component} from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.less']
})
export class HomeFormComponent {
  name = new FormControl()
  sex = new FormControl('Man')
  constructor() {
   }
  radioChange(){
    console.log(this.sex)
  }
}
