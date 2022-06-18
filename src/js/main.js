
import '../sass/main.scss'
import { getDataFromForm } from './formHelpers/getDataFromForm'
import { validateData } from './validateData'
import { handleErrors } from './formHelpers/handleErrors'
import { fields, fieldsValidationRules } from './data/post-form'
import { fields as fieldsForForm1, fieldsValidationRules as fieldsValidationRulesForForm1 } from './data/post-form1'

const form = document.querySelector('#form')

let formSubmitted = false

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = getDataFromForm(form, fields)

  const errors = validateData(data, fieldsValidationRules)

  handleErrors(errors, form)

  formSubmitted = true

  if (errors.length === 0) {
    console.log(data)
  }
})

form.addEventListener('input', (event) => {
  if (formSubmitted) {
    const data = getDataFromForm(form, fields)

    const errors = validateData(data, fieldsValidationRules)

    handleErrors(errors, form)
  }
})

const form1 = document.querySelector('#form1')

let form1Submitted = false

form1.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = getDataFromForm(form1, fieldsForForm1)

  const errors = validateData(data, fieldsValidationRulesForForm1)

  handleErrors(errors, form1)

  form1Submitted = true

  if (errors.length === 0) {
    console.log(data)
  }
})

form1.addEventListener('input', (event) => {
  if (form1Submitted) {
    const data = getDataFromForm(form1, fields)

    const errors = validateData(data, fieldsValidationRulesForForm1)

    handleErrors(errors, form1)
  }
})
