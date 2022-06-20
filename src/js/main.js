
import '../sass/main.scss'
import { fields, fieldsValidationRules } from './form/data/post-form'
import { fields as fieldsForForm1, fieldsValidationRules as fieldsValidationRulesForForm1 } from './form/data/post-form1'
import { addFormValidation } from './form/formHelpers/addFormValidation'

function logData(data) {
  console.log('data:', data)
}

const form = document.querySelector('#form')
addFormValidation(form, fields, fieldsValidationRules, logData)

const form1 = document.querySelector('#form1')
addFormValidation(form1, fieldsForForm1, fieldsValidationRulesForForm1, logData)

