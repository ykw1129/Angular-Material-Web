import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatDividerModule } from '@angular/material/divider'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatMenuModule } from '@angular/material/menu'
import { MatListModule} from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list'
// Directive import
const AllMaterialModules = [
  MatListModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatDividerModule,
  MatSidenavModule,
  MatMenuModule,
  MatGridListModule
]

@NgModule({
  declarations: [],
  imports: [
    AllMaterialModules,
  ],
  exports:[
    AllMaterialModules,
  ]
})
export class MaterialModule { }
