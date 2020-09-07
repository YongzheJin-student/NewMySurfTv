import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  dataReceived:string;
  slider: any[] = [];
  constructor(public activatedRoute:ActivatedRoute,private dummy: DummyService) {
    
    this.activatedRoute.queryParams.subscribe((data)=>{
        this.dataReceived = JSON.stringify(data);
    })
    this.slider = this.dummy.slider;
  }
  ngOnInit() {
  }

}
