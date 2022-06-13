
import '../sass/main.scss'
import { getDataFromForm } from './getDataFromForm'
import { validateData } from './validateData'
import { handelResponse as handelErrors } from './handelResponse'
import { criterias, fields } from './data/post-form'

const form = document.querySelector('#form')

form.onsubmit = (e) => {
  e.preventDefault()

  const data = getDataFromForm(form, fields)
  const errors = validateData(data, criterias)
  handelErrors(errors, form, fields, criterias)

  if (errors.length === 0) {
    console.log('success')
  }
}
