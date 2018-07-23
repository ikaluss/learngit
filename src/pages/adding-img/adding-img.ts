import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Platform, ViewController } from 'ionic-angular';
import { ActionSheetController} from "ionic-angular";
import { CabinetInfoImg } from "../../lib/CabinetInfoImg";


/**
 * Generated class for the AddingImgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adding-img',
  templateUrl: 'adding-img.html',
})
export class AddingImgPage {

  private cabinetInfoImg:CabinetInfoImg[];

  constructor(public navCtrl: NavController,
              public actionsheetCtrl: ActionSheetController,
              public platform: Platform,
              public navParams: NavParams) {

    this.cabinetInfoImg = new Array<CabinetInfoImg>();

    for(let i=0;i<6;i++){
      let imgtest = new CabinetInfoImg();
      imgtest.images = '../../assets/imgs/' + i + '.png';
      imgtest.comment = 'this is the No.' + i + ' image.';
      imgtest.cabinetName = '';
      imgtest.num = i;
      this.cabinetInfoImg.push(imgtest);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddingImgPage');
  }

  openActionSheet() {
    let actionSheet = this.actionsheetCtrl.create({
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '拍照',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            console.log('打开相机');
          }
        },
        {
          text: '从相册选取',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            console.log('打开相册');
            let imgtest = new CabinetInfoImg();
            imgtest.images = '../../assets/imgs/1.png';
            imgtest.comment = 'this is the No.2 image';
            imgtest.cabinetName = '';
            imgtest.num = 1;
            this.cabinetInfoImg.push(imgtest);
          }
        },
        {
          text: '取消',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  upload(){
    console.log('上传照片')
  }


}
