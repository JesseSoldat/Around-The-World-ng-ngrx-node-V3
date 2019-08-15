import { NgModule } from "@angular/core";
// ngrx
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
// ngrx custom
import * as fromAuth from "./auth.reducer";
// modules
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "../shared/shared.module";
// components
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature("auth", fromAuth.authReducer)
  ],
  declarations: [RegisterComponent, LoginComponent]
})
export class AuthModule {}
