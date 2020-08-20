import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadModalPageRoutingModule } from './download-modal-routing.module';

import { DownloadModalPage } from './download-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownloadModalPageRoutingModule
  ],
  declarations: [DownloadModalPage]
})
export class DownloadModalPageModule {}
