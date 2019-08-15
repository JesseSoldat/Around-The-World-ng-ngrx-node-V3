import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
// components
import { HeadingComponent } from "./components/heading/heading.component";
import { FormGroupComponent } from "./components/form-group/form-group.component";
// directives
import { BlurEventDirective } from "./directives/blur-event.directive";
import { BottomRowBtnComponent } from "./components/bottom-row-btn/bottom-row-btn.component";
import { LinkComponent } from "./components/link/link.component";
import { NoDataComponent } from "./components/no-data/no-data.component";
import { OverlayComponent } from "./components/overlay/overlay.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { TopRowBtnComponent } from "./components/top-row-btn/top-row-btn.component";
import { TileCardComponent } from "./components/tile-card/tile-card.component";
import { ImgCardComponent } from "./components/img-card/img-card.component";
import { ListCardComponent } from "./components/list-card/list-card.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [
    BlurEventDirective,
    HeadingComponent,
    FormGroupComponent,
    BottomRowBtnComponent,
    LinkComponent,
    NoDataComponent,
    OverlayComponent,
    SpinnerComponent,
    TopRowBtnComponent,
    TileCardComponent,
    ImgCardComponent,
    ListCardComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    // components
    HeadingComponent,
    FormGroupComponent,
    BottomRowBtnComponent,
    LinkComponent,
    NoDataComponent,
    OverlayComponent,
    SpinnerComponent,
    TopRowBtnComponent,
    TileCardComponent,
    ImgCardComponent,
    ListCardComponent,
    // directives
    BlurEventDirective
  ]
})
export class SharedModule {}
