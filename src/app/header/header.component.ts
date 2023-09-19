import { Component } from "@angular/core";
import { ConfigService } from "../services/config.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent {
    title = "";
    constructor(private configService: ConfigService) {
        this.title = "Angular Course";
    }
}