import { Component } from '@angular/core';

import { App, NavController, ModalController, ViewController } from 'ionic-angular';


@Component({
  template: `
      <ion-list>
      <button ion-item (click)="close('#')">Learn More</button>
      <button ion-item (click)="close('#')">Documentation</button>
      <button ion-item (click)="close('#')">Showcase</button>
   </ion-list>
  `
})
export class PopoverPage {

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController
  ) { }

  support() {
    this.app.getRootNav().push('SupportPage');
    this.viewCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.viewCtrl.dismiss();
  }
}