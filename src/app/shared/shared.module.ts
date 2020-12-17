import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [],
  exports: [CommonModule, FormsModule, MaterialModule, FlexLayoutModule],
})
export class SharedModule {}
