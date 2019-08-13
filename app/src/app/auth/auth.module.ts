import { NgModule } from "@angular/core";
// modules
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "../shared/shared.module";
// components
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  imports: [AuthRoutingModule, SharedModule],
  declarations: [RegisterComponent, LoginComponent]
})
export class AuthModule {}
