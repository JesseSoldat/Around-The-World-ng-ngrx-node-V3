import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
// 3rd party
// ngrx
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from "@ngrx/router-store";
import { EffectsModule } from "@ngrx/effects";
// custom ngrx
import { CustomSerializer } from "../_reducers/customSerializer";
import { reducers, metaReducers } from "../_reducers";
// modules
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
// components
import { NavbarComponent } from "./navbar/navbar.component";
// services
import { HttpService } from "../_services/http.service";
import { AuthService } from "../_services/auth.service";
import { environment } from "src/environments/environment";

@NgModule({
  imports: [
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([])
  ],
  exports: [HttpClientModule, AppRoutingModule, SharedModule, NavbarComponent],
  declarations: [NavbarComponent],
  providers: [
    HttpService,
    AuthService,
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ]
})
export class CoreModule {}
