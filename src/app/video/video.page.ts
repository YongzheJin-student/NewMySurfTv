import { Component, OnInit } from '@angular/core';
import { DummyService } from '../dummy.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  VideoID:string;
  constructor(private route:ActivatedRoute) {
  }
  ngOnInit() {
    this.VideoID=this.route.snapshot.paramMap.get("VideoID")
  }

}
