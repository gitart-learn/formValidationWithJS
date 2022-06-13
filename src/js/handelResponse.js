import { getDataFromField } from './getDataFromForm'
import { validateData } from './validateData'

function handelResponse({
  form,
  errors,
  fieldsToCheck,
  criterias,
}) {
  errors.forEach((elem) => {
    const errorMessage = elem.errorMessage
    const fieldName = elem.fieldName
    const fields = document.querySelectorAll(`[name="${fieldName}"]`)
    fields.forEach((field) => {
      if (!field.parentElement.parentElement.querySelector('.invalid-feedback')) {
        field.classList.add('error')
        const error = document.createElement('div')
        error.classList.add('invalid-feedback')
        error.innerText = errorMessage
        field.parentElement.parentElement.appendChild(error)
      }

      function listener() {
        const fieldToCheck = fieldsToCheck.find(elem => elem.inputName === fieldName)
        const newData = getDataFromField(fieldToCheck, form)

        const criteria = criterias.find(elem => elem.name === fieldName)
        const errors = validateData({
          [fieldName]: newData,
        }, [
          criteria,
        ])

        if (errors.length === 0) {
          const feedback = field.parentElement.parentElement.querySelector('.invalid-feedback')
          feedback.remove()
          field.removeEventListener('input', listener)
          field.classList.remove('error')
        }
        else {
          const feedback = field.parentElement.parentElement.querySelector('.invalid-feedback')
          feedback.innerText = errors[0].errorMessage
        }
      }

      field.addEventListener('input', listener)
    },
    )
  },
  )
}

export { handelResponse }
