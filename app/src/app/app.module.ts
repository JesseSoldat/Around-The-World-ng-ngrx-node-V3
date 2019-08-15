import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// module
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./auth/auth.module";

// components
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, CoreModule, SharedModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
