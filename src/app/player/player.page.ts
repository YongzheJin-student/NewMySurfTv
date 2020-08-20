import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
  @ViewChild('videoPlayer', { static: false }) mVideoPlayer: ElementRef;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.mVideoPlayer.nativeElement);
      this.mVideoPlayer.nativeElement.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
      this.mVideoPlayer.nativeElement.play();
      console.log('play');
    }, 1000);
  }
  videoEnd() {

  }
  playingVideo() {

  }
}
