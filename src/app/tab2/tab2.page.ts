import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items;

  constructor(private router: Router) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Andrew jin',
      'Allen gu',
      'rita zhu',
      'amar',
      'branyt xiao',
      'jerry zhang'
    ];
  }

  details() {
    this.router.navigate(['video']);
  };
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  selectval(val)
  {
    this.router.navigate(['video']);
  }
  
}


