import { validateData } from '../validateData'
import { getDataFromForm } from './getDataFromForm'
import { handleErrors } from './handleErrors'

function addFormValidation(form, fields, fieldsValidationRules) {
  let haveValidationError = false

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    haveValidationError = true

    const data = getDataFromForm(form, fields)
    const errors = validateData(data, fieldsValidationRules)

    if (errors.length === 0) {
      console.log(data)
      form.reset()
    }
    else {
      handleErrors(errors, form)
    }
  })

  form.addEventListener('input', () => {
    if (haveValidationError) {
      const data = getDataFromForm(form, fields)

      const errors = validateData(data, fieldsValidationRules)

      handleErrors(errors, form)
    }
  })
}

export { addFormValidation }
