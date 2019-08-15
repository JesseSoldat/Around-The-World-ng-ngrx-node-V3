import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
// ngrx
import { Store } from "@ngrx/store";
import { AppState } from "../_reducers";
import { Register } from "../auth/auth.actions";
// model
import { Auth } from "../_models/auth.model";
import { User } from "../_models/user.model";
import { HttpRes } from "../_models/http-res.model";
// services
import { HttpService } from "./http.service";
// utils
import { decodeToken } from "../_utils/decodeToken";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private store: Store<AppState>,
    private httpService: HttpService
  ) {}

  // helpers
  handleError({ msg }) {
    console.log("HANDLE ERROR: ", msg);
    return of({ msg, payload: null });
  }

  handleSuccess(msg): void {
    console.log("HANDLE SUCCESS", msg);
  }

  userFromToken(token: string): User {
    const user = decodeToken(token);
    return { ...user };
  }

  // api calls
  registerByEmail(auth: Auth): Observable<HttpRes> {
    return this.httpService.httpPostRequest("register", auth).pipe(
      tap(res => {
        const { msg, payload } = res;
        const { token } = payload;

        const user: User = this.userFromToken(token);

        console.log("USER: ", user);

        this.handleSuccess(msg);

        this.store.dispatch(new Register({ user, token }));
      }),
      catchError(err => this.handleError(err.error))
    );
  }

  loginByEmail(auth: Auth): Observable<HttpRes> {
    return this.httpService.httpPostRequest("login", auth).pipe(
      tap(res => {
        const { msg, payload } = res;
        const { token } = payload;

        const user: User = this.userFromToken(token);

        this.handleSuccess(msg);
      }),
      catchError(err => this.handleError(err.error))
    );
  }
}
