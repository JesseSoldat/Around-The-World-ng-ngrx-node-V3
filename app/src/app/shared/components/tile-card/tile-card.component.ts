import { Component, Input } from "@angular/core";
// models
import { DashboardCard } from "../../../_models/dashboard-card.model";

@Component({
  selector: "app-tile-card",
  templateUrl: "./tile-card.component.html",
  styleUrls: ["./tile-card.component.scss"]
})
export class TileCardComponent {
  @Input() data: DashboardCard;
}
