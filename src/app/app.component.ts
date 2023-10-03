import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthFacade } from "./auth/data-access";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  isTodoApp = true;

  constructor(private http: HttpClient, private auth: AuthFacade) {
    this.testJsonServer();
  }


  private testJsonServer(): void {
    this.http.get<unknown>("api/test").subscribe(res => {
      console.log(res);
    });
  }
}
