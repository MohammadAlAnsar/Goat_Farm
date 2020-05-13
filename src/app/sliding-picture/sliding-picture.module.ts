import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlidingPictureComponent} from './sliding-picture.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [SlidingPictureComponent],
  imports: [
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA],
})
export class SlidingPictureModule { }
