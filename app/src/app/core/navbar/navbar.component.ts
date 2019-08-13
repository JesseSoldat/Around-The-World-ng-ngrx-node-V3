import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap, filter, switchMap } from "rxjs/operators";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  largeScreen =
    "brand-text d-none d-sm-inline d-md-inline d-lg-inline d-xl-inline";
  smallScreen = "brand-text d-inline d-sm-none d-md-none d-lg-none d-xl-none";

  constructor() {}

  ngOnInit() {}
}
