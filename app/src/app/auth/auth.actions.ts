import { Action } from "@ngrx/store";
import { User } from "../_models/user.model";

export enum AuthActionTypes {
  RegisterAction = "[Register Page] RegisterAction",
  LoginAction = "[Login Page] Login Action",
  LogoutAction = "[NavBar] LogoutAction"
}

export class Register implements Action {
  readonly type = AuthActionTypes.RegisterAction;

  constructor(public payload: { user: User; token }) {}
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;

  constructor(public payload: { user: User; token }) {}
}

export type AuthActions = Register | Login;
