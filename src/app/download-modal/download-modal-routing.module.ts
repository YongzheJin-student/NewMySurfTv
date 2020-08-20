import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadModalPage } from './download-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DownloadModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownloadModalPageRoutingModule {}
