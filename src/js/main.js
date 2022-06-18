
import '../sass/main.scss'
import { getDataFromForm } from './formHelpers/getDataFromForm'
import { validateData } from './validateData'
import { handleErrors } from './formHelpers/handleErrors'
import { fields, fieldsValidationRules } from './data/post-form'

const form = document.querySelector('#form')

let afterSubmit = false

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = getDataFromForm(form, fields)

  const errors = validateData(data, fieldsValidationRules)

  handleErrors(errors, form)

  afterSubmit = true
})

form.addEventListener('input', (event) => {
  if (afterSubmit) {
    const data = getDataFromForm(form, fields)

    const errors = validateData(data, fieldsValidationRules)

    handleErrors(errors, form)
  }
})
