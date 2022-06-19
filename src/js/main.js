
import '../sass/main.scss'
import { fields, fieldsValidationRules } from './data/post-form'
import { fields as fieldsForForm1, fieldsValidationRules as fieldsValidationRulesForForm1 } from './data/post-form1'
import { addFormValidation } from './formHelpers/addFormValidation'

const form = document.querySelector('#form')
addFormValidation(form, fields, fieldsValidationRules)

const form1 = document.querySelector('#form1')
addFormValidation(form1, fieldsForForm1, fieldsValidationRulesForForm1)
