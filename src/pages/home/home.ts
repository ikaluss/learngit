import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddingImgPage} from "../adding-img/adding-img";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {


}
openAddingImgPage(){
    this.navCtrl.push('AddingImgPage');
}
}
