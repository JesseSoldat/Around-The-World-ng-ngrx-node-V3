import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap, filter, switchMap } from "rxjs/operators";
// ngrx
import { Store, select } from "@ngrx/store";
// ngrx custom
import { AuthState } from "../../auth/auth.reducer";
import { selectIsAuth } from "../../auth/auth.selectors";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isAuth$: Observable<boolean>;
  brandLink: string;
  // css
  largeScreen =
    "brand-text d-none d-sm-inline d-md-inline d-lg-inline d-xl-inline";
  smallScreen = "brand-text d-inline d-sm-none d-md-none d-lg-none d-xl-none";

  constructor(private store: Store<AuthState>, private router: Router) {}

  ngOnInit() {
    this.checkIsAuth();
  }

  checkIsAuth(): void {
    this.isAuth$ = this.store.pipe(
      select(selectIsAuth),
      tap((isAuth: boolean) => {
        this.brandLink = isAuth ? "/dashboard" : "/";
      })
    );
  }

  navigateTo(): void {
    this.router.navigateByUrl(this.brandLink);
  }
}
