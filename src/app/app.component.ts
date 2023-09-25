import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  isTodoApp = true;

  constructor(private http: HttpClient) {
    this.testJsonServer();
  }


  private testJsonServer(): void {
    this.http.get<unknown>("api/test").subscribe(res => {
      console.log(res);
    });
  }
}
