import { getDataFromField } from './getDataFromForm'

function handelResponse(response, form, fieldsToCheck) {
  response.forEach((elem) => {
    const errorMessage = elem.errorMessage
    const fieldName = elem.fieldName
    const fields = document.querySelectorAll(`[name="${fieldName}"]`)
    fields.forEach((field) => {
      if (!field.parentElement.parentElement.querySelector('.invalid-feedback')) {
        const error = document.createElement('div')
        error.classList.add('invalid-feedback')
        error.innerText = errorMessage
        field.parentElement.parentElement.appendChild(error)
      }

      function listener() {
        const fieldToCheck = fieldsToCheck.find(elem => elem.inputName === fieldName)
        const newData = getDataFromField(fieldToCheck, form)
        console.log(newData)

        const responseAfterInput = elem.checkFunc(newData, elem.value)
        console.log('checkfunc', elem.checkFunc)
        console.log(responseAfterInput)

        const feedback = field.parentElement.parentElement.querySelector('.invalid-feedback')

        const check = feedback && responseAfterInput
        console.log('check', check, 'feedback', feedback, 'responseAfterInput', responseAfterInput)
        if (feedback && responseAfterInput) {
          feedback.remove()
          console.log(1)
          field.removeEventListener('input', listener)
        }
      }

      field.addEventListener('input', listener)
    },
    )
  },
  )
}

export { handelResponse }
