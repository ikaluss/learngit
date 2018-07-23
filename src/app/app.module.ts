import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage as ModalBasicPage } from '../pages/contact/contact';
import { ModalContentPage } from "../pages/contact/modal-content";
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as ionicGalleryModal from 'ionic-gallery-modal';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ModalBasicPage,
    ModalContentPage,
    HomePage,
    TabsPage
  ],
  imports: [
    ionicGalleryModal.GalleryModalModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ModalBasicPage,
    ModalContentPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
