import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatDividerModule} from '@angular/material/divider'
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'
import {MatTreeModule} from '@angular/material/tree'
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatTabsModule} from '@angular/material/tabs';

const material= [
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  MatTreeModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatProgressBarModule,
  MatTabsModule
]

@NgModule({
  declarations: [],
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
