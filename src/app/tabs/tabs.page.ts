import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  val;
  constructor() {}
  Change(eve) {
    console.log(eve.tab);
    this.val = eve.tab;
  }
//check whether in the page or not
}
