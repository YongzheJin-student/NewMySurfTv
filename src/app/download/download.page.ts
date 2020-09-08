import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: "app-download",
  templateUrl: "./download.page.html",
  styleUrls: ["./download.page.scss"]
})
export class DownloadPage implements OnInit {
  email = "";
  constructor(public http: HttpClient) {}

  ngOnInit() {}

  title = "mailtest";
  API_KEY = "51368ebc00fbbf4f672b2827768af8a3-us17";
  AUDIENCE_ID = "993f95e69a";
  SEND_WELCOME = true;

  subs() {
    console.log("test");
    const URL =
      "https://us17.api.mailchimp.com/3.0/lists/subscribe.json?apikey=" +
      this.API_KEY +
      "&id=" +
      this.AUDIENCE_ID +
      "&email[email]=" +
      this.email +
      "&send_welcome=" +
      this.SEND_WELCOME;
    // call HTTP get request

    this.http.get<any>(URL).subscribe(
      success => {
        console.log("success", success);
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
