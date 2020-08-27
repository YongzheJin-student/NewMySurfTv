import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DummyService } from '../dummy.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  val
  slider: any[] = [];
  shows;
  slideOpts = {
    slidesPerView: 3,
  };
  constructor(private router: Router,
  private dummy: DummyService,
  
    ) {
      this.slider = this.dummy.slider;
      this.shows = this.dummy.dummyData;
    }
  getColor(val) {
    return '3.0px solid ' + val;
  };
  details() {
    this.router.navigate(['video']);
  };
  searchurl() {
    this.router.navigate(['tab2']);
  };
  homeurl() {
    this.router.navigate(['tab1']);
  };
  liveurl() {
    this.router.navigate(['tab3']);
  };
  downloadurl() {
    this.router.navigate(['download']);
  };
  
}
