import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Observable, of } from "rxjs";
// models
import { InputGroup } from "../../_models/input-group.model";
import { ValidationErr } from "../../_models/validation-error.model";
import { HttpRes } from "../../_models/http-res.model";
import { Auth } from "../../_models/auth.model";
// data
import { formGroupData } from "../formGroupData";
// utils
import { fieldValidation } from "../../_utils/fieldValidation";
// validators
import { confirmPasswordValidator } from "../../_utils/confirmPasswordValidator";
// services
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  formGroupData$: Observable<InputGroup>;
  // form
  registerForm: FormGroup;
  controlNameErrs = {
    username: null,
    email: null,
    password: null,
    confirmPassword: null
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.formGroupData$ = of(formGroupData);
    this.initializeForm();
  }

  // set up the form
  initializeForm() {
    this.registerForm = this.formBuilder.group({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      passwordGroup: this.formBuilder.group(
        {
          password: [
            "",
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(15)
            ]
          ],
          confirmPassword: ["", [Validators.required]]
        },
        { validator: confirmPasswordValidator }
      )
    });
  }

  // on form changes
  handleBlurEvent(controlName: string) {
    // handle group controls
    if (controlName === "password" || controlName === "confirmPassword") {
      return this.handleGroupErrs(controlName);
    }
    // single form control
    this.handleControlErrs(controlName);
  }

  handleControlErrs(controlName: string) {
    // currentControlErr will only show the first error
    const currentControlErr: ValidationErr = this.registerForm.get(controlName)
      .errors;

    const uiErrorMsg = fieldValidation(currentControlErr);
    // console.log("uiErrorMsg", uiErrorMsg);
    this.controlNameErrs[controlName] = uiErrorMsg;
  }

  handleGroupErrs(controlName: string) {
    const groupErr = this.registerForm.get("passwordGroup");
    const controlErr = fieldValidation(groupErr.errors);

    // console.log(`controlErr ${controlName}`, controlErr);

    if (controlName === "confirmPassword") {
      return (this.controlNameErrs[controlName] = controlErr);
    }

    // handle single control errors
    const singleControlErr: ValidationErr = groupErr.get(controlName).errors;

    // set the UI object
    this.controlNameErrs[controlName] = fieldValidation(singleControlErr);
  }

  handleSubmit() {
    const values = this.registerForm.value;
    const { password } = values.passwordGroup;

    const auth: Auth = {
      username: values.username,
      email: values.email,
      password
    };

    this.authService
      .registerByEmail(auth)
      .subscribe((res: HttpRes) => {}, err => {});
  }
}
