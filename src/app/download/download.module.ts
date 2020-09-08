import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DownloadPageRoutingModule } from "./download-routing.module";

import { DownloadPage } from "./download.page";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownloadPageRoutingModule,
    HttpClientModule
  ],
  declarations: [DownloadPage],
  providers: [HttpClient]
})
export class DownloadPageModule {}
