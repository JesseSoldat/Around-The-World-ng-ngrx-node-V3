import { Directive, Output, HostListener, EventEmitter } from "@angular/core";

@Directive({
  selector: "[appBlurEvent]"
})
export class BlurEventDirective {
  @Output() appBlurEvent = new EventEmitter();

  @HostListener("focusout", ["$event.target"])
  onFocusout(target) {
    // callback function name does not matter
    // console.log("hello from emitter", target.name);
    this.appBlurEvent.emit(target.name);
  }
}
