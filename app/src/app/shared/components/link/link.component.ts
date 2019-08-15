import { Component, OnInit, Input } from "@angular/core";
import { linkMap } from "./linkMap";

@Component({
  selector: "app-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.scss"]
})
export class LinkComponent implements OnInit {
  @Input() icon: string;
  @Input() linkName: string;
  route: string;

  ngOnInit() {
    this.route = linkMap[this.linkName.toLowerCase()];
  }
}
