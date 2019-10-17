import { Injectable } from '@angular/core';
import { Validators, AbstractControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormUtilService {

  constructor() { }
  formBuilderGroup() {
    let param = [
      {
        formControlName: 'firstName',
        Validation: [
          { 'validationName': 'required', 'param': [] }
        ]
      },
      {
        formControlName: 'lastName',
        Validation: [{ 'validationName': 'required', 'param': [] }]
      },
      {
        formControlName: 'email',
        Validation: [
          { 'validationName': 'required', 'param': [] },
          { 'validationName': 'email', 'param': [] }
        ]
      },
      {
        formControlName: 'password',
        Validation: [
          { 'validationName': 'required', 'param': [] },
          { 'validationName': 'minLength', 'param': [4] }
        ]
      }
    ]
    let fbg = {}; //formBuilderGroup
    for (let obj of param) {
      if (Array.isArray(obj.Validation)) {
        let validations = this.validatorBuilder(obj.Validation);
        fbg[obj.formControlName] = validations
      }
    }
    return fbg
  }

  validatorBuilder(mainParam) {
    // Validation: [{ 'validationName': 'pattern', 'param': [p1,p2] },]
    let formValidation = [];
    let param1: any;
    let param2: any;
    let param3: any;
    let param4: any;
    let CustomValidatorName: any

    var v = {
      required: Validators.required,
      email: Validators.email,
      min: Validators.min(param1),
      max: Validators.max(param1),
      maxLength: Validators.maxLength(param1),
      minLength: Validators.minLength(param1),
      null: Validators.nullValidator,
      pattern: Validators.pattern(param1),
      requiredTrue: Validators.requiredTrue,
      customValidation: CustomValidatorName
    }

    for (let obj of mainParam) {
      if (obj.validationName in v) {
        obj.param.length > 0 ? param1 = obj.param[0] : ''
        formValidation.push(v[obj.validationName])
      }
    }
    return formValidation
  }
}