import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DummyService } from '../dummy.service';
import { SocialSharing } from "@ionic-native/social-sharing/ngx";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  VideoID:string="1";
  val;
  slider: any[] = [];
  shows;
  item;
  slideOpts = {
    slidesPerView: 3,
  };
  slideOpts2 = {
    slidesPerView: 1,
  };
  constructor(private router: Router,
  private dummy: DummyService,
  private socialSharing: SocialSharing
  
    ) {
      this.slider = this.dummy.slider;
      this.shows = this.dummy.dummyData;
    }
  getColor(val) {
    return '3.0px solid ' + val;
  };
  details() {
    this.router.navigateByUrl('/video/{{VideoID}}');
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
  
  shareClick(){

  this.socialSharing.share("Look What I Found On This App Called mysurf.tv", 
  "mysurf.tv", "", "https://www.mysurf.tv/");

  }
}
