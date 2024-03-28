import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatTableModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatSliderModule,
    MatTableModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AngularMaterialModule { }
