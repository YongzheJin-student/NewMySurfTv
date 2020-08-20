import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.page.html',
  styleUrls: ['./category-modal.page.scss'],
})
export class CategoryModalPage implements OnInit {

  activeText;
  constructor(private modalCtrl: ModalController, private navParam: NavParams) {
    this.navParam.get('text');

    console.log(this.navParam.get('text'));

    this.activeText = this.navParam.get('text');
  }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

  select(val) {
    this.modalCtrl.dismiss( { value: val } );
  }

}
