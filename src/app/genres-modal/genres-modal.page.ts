import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-genres-modal',
  templateUrl: './genres-modal.page.html',
  styleUrls: ['./genres-modal.page.scss'],
})
export class GenresModalPage implements OnInit {

  allGenres = [
    'Available for Download',
    'Because She Watched',
    'Indian',
    'US',
    'British',
    'European',
    'Asian',
    'Family',
    'Reality & Talk Shows',
    'Action',
    'Dramas',
    'Available for Download',
    'Because She Watched',
    'Indian',
    'US',
    'British',
    'European',
    'Asian',
    'Family',
    'Reality & Talk Shows',
    'Action',
    'Dramas'
  ];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
