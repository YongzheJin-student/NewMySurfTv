import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  jsonData:any=[];

  constructor(private router: Router) {
    this.initializaJSONData();
  }

  FilterJSONData(ev:any)
  {
    this.initializaJSONData();
    const val = ev.target.value; 
    if (val && val.trim() != ''){
        this.jsonData = this.jsonData.filter((item)=>{
        return (item.name.toLowerCase().indexof(val.toLowercase())>-1);
      })
    }
  }
  selectval(val)
  {
    this.router.navigate(['video']);
  }
  initializaJSONData()
  {
    this.jsonData=[
      {
        "name":"OneVideo",
        "code":"v1"
      },
      {
        "name":"TwoVideo",
        "code":"v2"
      },
      {
        "name":"ThreeVideo",
        "code":"v3"
      },
      {
        "name":"FourVideo",
        "code":"v4"
      },
      {
        "name":"FixeVideo",
        "code":"v5",
      },
      {
        "name":"SixeVideo",
        "code":"v6",
      }
  ]
}
}


