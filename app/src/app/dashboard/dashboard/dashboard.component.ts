import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
// models
import { DashboardCards } from "../../_models/dashboard-cards.model";
// data
import { cardData } from "./cardData";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  cardData$: Observable<DashboardCards>;

  ngOnInit() {
    this.cardData$ = of(cardData);
  }
}
