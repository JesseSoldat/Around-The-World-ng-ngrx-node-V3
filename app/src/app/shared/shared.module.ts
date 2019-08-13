import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule } from "@angular/forms";
// components
import { HeadingComponent } from "./components/heading/heading.component";
import { FormGroupComponent } from "./components/form-group/form-group.component";
// directives
import { BlurEventDirective } from "./directives/blur-event.directive";
import { BottomRowBtnComponent } from './components/bottom-row-btn/bottom-row-btn.component';
import { LinkComponent } from './components/link/link.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TopRowBtnComponent } from './components/top-row-btn/top-row-btn.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [HeadingComponent, FormGroupComponent, BlurEventDirective, BottomRowBtnComponent, LinkComponent, NoDataComponent, OverlayComponent, SpinnerComponent, TopRowBtnComponent],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormGroupComponent,
    HeadingComponent,
    BlurEventDirective
  ]
})
export class SharedModule {}
