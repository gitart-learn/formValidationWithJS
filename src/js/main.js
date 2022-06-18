
import '../sass/main.scss'
import { getDataFromField, getDataFromForm } from './formHelpers/getDataFromForm'
import { validateData } from './validateData'
import { handleErrors } from './formHelpers/handleErrors'
import { fields, fieldsValidationRules } from './data/post-form'

const form = document.querySelector('#form')
// const errorHandler = initErrorHandler(form, fields, fieldsValidationRules)

let afterSubmit = false
// form.onsubmit = (e) => {
//   e.preventDefault()

//   const data = getDataFromForm(form, fields)
//   // console.log(data)

//   const errors = validateData(data, fieldsValidationRules)
//   // console.log('response: ')

//   // errors.forEach(elem => console.log(elem))

//   handleErrors(errors, form)

//   afterSubmit = true
// }

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = getDataFromForm(form, fields)
  // console.log(data)

  const errors = validateData(data, fieldsValidationRules)
  // console.log('response: ')

  // errors.forEach(elem => console.log(elem))

  handleErrors(errors, form)

  afterSubmit = true
})

form.addEventListener('input', (event) => {
  console.log(event.target)
  if (afterSubmit) {
    console.log('input listener')

    const data = getDataFromForm(form, fields)
    // console.log(data)

    const errors = validateData(data, fieldsValidationRules)
    // console.log('response: ')

    // errors.forEach(elem => console.log(elem))

    handleErrors(errors, form)
  }
})
