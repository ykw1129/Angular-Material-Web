import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
