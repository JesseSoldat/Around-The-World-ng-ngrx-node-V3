import { Component, OnInit } from "@angular/core";
import { of, Observable } from "rxjs";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

// data
import { formGroupData } from "../formGroupData";
// models
import { InputGroup } from "../../_models/input-group.model";
import { ValidationErr } from "../../_models/validation-error.model";
// utils
import { fieldValidation } from "../../_utils/fieldValidation";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  // form
  formGroupData$: Observable<InputGroup> = null;
  loginForm: FormGroup;
  controlNameErrs = {
    email: null,
    password: null
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroupData$ = of(formGroupData);
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required)
    });
  }

  handleControlErrs(controlName: string) {
    const currentControlErr: ValidationErr = this.loginForm.get(controlName)
      .errors;
    this.controlNameErrs[controlName] = fieldValidation(currentControlErr);
  }

  handleBlurEvent(controlName: string) {
    this.handleControlErrs(controlName);
  }

  handleSubmit() {}
}
