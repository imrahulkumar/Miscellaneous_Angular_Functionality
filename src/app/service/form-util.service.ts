import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormUtilService {

  constructor() { }
  formBuilderGroup(params) {
    let param = [
      {
        formControlName: 'FirstName',
        Validation: [{ 'validationName': 'required', 'param': [] },
        { 'validationName': 'patter', 'param': ['#$@#$#'] },
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

    for (let obj of param) {
      let fbg = {}; //formBuilderGroup
      // fbg['obj.formControlName'] = 
      if (Array.isArray(obj.Validation)) {
        this.validatorBuilder(obj.Validation)
      }

    }

  }

  validatorBuilder(param) {
    // Validation: [{ 'validationName': 'patter', 'param': [p1,p2] },]
    let formValidation = []

    for (let obj of param) {
      //  if(param)
    }
  }


}
