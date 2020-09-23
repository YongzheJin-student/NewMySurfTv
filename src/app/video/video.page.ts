import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { DummyService } from '../dummy.service';
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  // private _socialShare: any;
  activityDetail: Observable<any>;
  constructor(private socialSharing: SocialSharing) {
  }
  ngOnInit() {
  }

  shareClick(){
    console.log('mmmmmm');

//     // Check if sharing via email is supported
// this.socialSharing.canShareViaEmail().then(() => {
//   console.log('can email');
//   // Sharing via email is possible
// }).catch(() => {
//   // Sharing via email is not possible
//   console.log('error email');
// });

// // Share via email
// this.socialSharing.shareViaEmail('Body', 'Subject', ['lanjiyumiao@gmail.com']).then(() => {
//   // Success!
// }).catch(() => {
//   // Error!
// });
let subject = "surf";
let url = "http://mysurf.tv/video/6191584537001";

this.socialSharing.share("Look What I Found On This App Called mysurf.tv", 
subject, "", url);

    // this.activityDetail.subscribe((activity)=> {
    // });

  }

  
}
