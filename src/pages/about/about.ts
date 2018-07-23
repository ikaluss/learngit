import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { CabinetInfoImg } from "../../lib/CabinetInfoImg";

import { ModalController } from "ionic-angular";
import { ModalContentPage } from "../contact/modal-content";
import { GalleryModal} from "ionic-gallery-modal";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  //搜索到的所有机柜照片
  private cabinetInfoImg:CabinetInfoImg[];

  public photos: any[] = [];

  constructor(public navCtrl: NavController,
              public mnuCtrl: MenuController,
              private modalCtrl: ModalController) {

    this.cabinetInfoImg = new Array<CabinetInfoImg>();

    this.loadPhoto();

  }

  //工具条
  private tbBtns=[
    {index:0,text:'名称',status:false,icon:'arrow-up'},
    {index:1,text:'详情',status:false,icon:'search'}
  ];

  private loadPhoto(){
    var num = 9;
    for(let i=0;i<num;i++){
      let imgtest = new CabinetInfoImg();
      imgtest.images = '../../assets/imgs/' + i + '.png';
      imgtest.comment = 'this is the No.' + i + ' image.';
      imgtest.cabinetName = '';
      imgtest.num = i;
      this.cabinetInfoImg.push(imgtest);
    }
  }

  openModal(num:number = 0){
    this.createPhotos(9);
    let modal = this.modalCtrl.create(GalleryModal,{
      photos:this.photos,
      initialSlide:num,
    });
    modal.present();
  }

  createPhotos(length:number = 9){
    for (let i = 0; i < length; i++) {
      console.log(this.cabinetInfoImg[i].images);
      this.photos.push({
        url: this.cabinetInfoImg[i].images,
      });
      this.photos[i].title = this.cabinetInfoImg[i].comment;
    }
  }

  openModal2(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

  openMenu(){
    this.mnuCtrl.open('right');
  }

  mnuCancel_Click(){
    this.mnuCtrl.close('right');
    console.log('Menu Canceled!')
  }

  mnuSave_Click(){
    this.mnuCtrl.close('right');
    console.log('Menu Saved!')
  }

  //存储设备点击事件
  mnuBtn1Toggle_Click(){}

  //网络设备点击事件
  mnuBtn2Toggle_Click(){}

  //物理设备点击事件
  mnuBtn3Toggle_Click(){}

  //机柜照片点击事件
  mnuBtn4Toggle_Click(){}


}
