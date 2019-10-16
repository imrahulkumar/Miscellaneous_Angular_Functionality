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
        formControlName: 'FirstName',
        Validation: [
          { 'validationName': 'required', 'param': [] },
          { 'validationName': 'patter', 'param': ['#$@#$#'] }]
      },
      {
        formControlName: 'LastName',
        Validation: [{ 'validationName': 'required', 'param': [] }]
      },
      {
        formControlName: 'Age',
        Validation: [{ 'validationName': 'required', 'param': [] }]
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
    // for (let obj of mainParam) {
    for (let i = 0; i < mainParam.length; i++) {
      if (mainParam[i].validationName) {
        if (mainParam[i].param.length == 0)
          formValidation.push(Validators.required)
        if (mainParam[i].param.length == 1)
          formValidation.push(Validators[mainParam[i].validationName](mainParam[i].param[0]))
        else if (mainParam[i].param.length == 2)
          formValidation.push(Validators[mainParam[i].validationName](mainParam[i].param[0], mainParam[i].param[1]))
        else if (mainParam[i].param.length == 3)
          formValidation.push(Validators[mainParam[i].validationName](mainParam[i].param[0], mainParam[i].param[1], mainParam[i].param[2]))
        else if (mainParam[i].param.length == 4)
          formValidation.push(Validators[mainParam[i].validationName](mainParam[i].param[0], mainParam[i].param[1], mainParam[i].param[2], mainParam[i].param[3]))
        else if (mainParam[i].param.length == 5)
          formValidation.push(Validators[mainParam[i].validationName](mainParam[i].param[0], mainParam[i].param[1], mainParam[i].param[2], mainParam[i].param[3], mainParam[i].param[4]))
        else if (mainParam[i].param.length == 6)
          formValidation.push(Validators[mainParam[i].validationName](mainParam[i].param[0], mainParam[i].param[1], mainParam[i].param[2], mainParam[i].param[3], mainParam[i].param[4], mainParam[i].param[5]))
      }
    }
    return formValidation;
  }


}
