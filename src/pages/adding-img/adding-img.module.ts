import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddingImgPage } from './adding-img';

@NgModule({
  declarations: [
    AddingImgPage,
  ],
  imports: [
    IonicPageModule.forChild(AddingImgPage),
  ],
})
export class AddingImgPageModule {}
