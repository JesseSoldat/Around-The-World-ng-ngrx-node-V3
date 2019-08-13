import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  imports: [HttpClientModule, AppRoutingModule, SharedModule],
  exports: [HttpClientModule, AppRoutingModule, SharedModule, NavbarComponent],
  declarations: [NavbarComponent]
})
export class CoreModule {}
