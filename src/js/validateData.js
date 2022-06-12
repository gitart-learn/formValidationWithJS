import { getSelectedRadio } from './getDataFromForm'

function checkIfThereIsData(fieldData) {
  return !!fieldData
}

function checkIfItIsEmail(fieldData) {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return (regexEmail.test(fieldData))
}

function checkIfItIsPhone(fieldData) {
  const regexPhone = /^\(?(\d{2})\)?[- ]?(\d{3})[- ]?(\d{4})$/
  return regexPhone.test(fieldData)
}

function checkMinLength(fieldData, minLength) {
  return fieldData.length >= minLength
}

const rulesInstructions = [
  {
    ruleName: 'required',
    checkFunc: checkIfThereIsData,
    defaultErrorMessage: '{fieldName}  is required',
  },
  {
    ruleName: 'minLength',
    checkFunc: checkMinLength,
    defaultErrorMessage: 'length should be at least {minLength} characters',
  },
  {
    ruleName: 'email',
    checkFunc: checkIfItIsEmail,
    defaultErrorMessage: 'here should be an Email',
  },
  {
    ruleName: 'phone',
    checkFunc: checkIfItIsPhone,
    defaultErrorMessage: 'here should be a phone number',
  },

]

function validateData(data, fieldsValidationRules) {
  const validationResponse = []

  for (const fieldName in data) {
    const validationCriteria = (fieldsValidationRules.find(fieldValidationRules => fieldValidationRules.name === fieldName))
    if (!validationCriteria) continue
    const rules = validationCriteria.rules

    rules.some((rule) => {
      const ruleInstructions = rulesInstructions.find(elem => elem.ruleName === rule.ruleName)
      const response = ruleInstructions.checkFunc(data[fieldName], rule.value)
      if (!response) {
        const errorMessage = rule.SpecificErrorMessage || ruleInstructions.defaultErrorMessage.replace('{fieldName}', fieldName).replace('{minLength}', rule.value)

        validationResponse.push({
          fieldName,
          errorMessage,
        })

        // show response on page

        const inputs = document.querySelectorAll(`[name="${fieldName}"]`)
        inputs.forEach((input) => {
          if (!input.parentElement.parentElement.querySelector('.invalid-feedback')) {
            const error = document.createElement('div')
            error.classList.add('invalid-feedback')
            error.innerText = errorMessage
            input.parentElement.parentElement.appendChild(error)
          }

          input.addEventListener('input', () => {
            const responseAfterInput = ruleInstructions.checkFunc(getSelectedRadio(fieldName), rule.value)
            console.log(responseAfterInput)
            console.log('get radio again', fieldName, getSelectedRadio(fieldName))
            if (responseAfterInput) {
              input.classList.remove('error')
              const feedback = input.parentElement.parentElement.querySelector('.invalid-feedback')
              if (feedback) {
                feedback.remove()
              }
            }
          })
        })

        return true
      }
      return false
    },
    )
  }

  // show response on page
  // validationResponse.forEach((elem) => {
  //   const errorMessage = elem.errorMessage
  //   const fieldName = elem.fieldName
  //   const field = document.querySelector(`[name="${fieldName}"]`)
  //   field.classList.add('error')
  //   // field.setAttribute('invalid', true)
  //   const error = document.createElement('div')
  //   error.classList.add('invalid-feedback')
  //   error.innerText = errorMessage
  //   field.parentElement.appendChild(error)

  //   field.addEventListener('input', () => {
  //     field.classList.remove('error')
  //     field.parentElement.querySelector('.invalid-feedback').remove()
  //   })
  // },
  // )

  return validationResponse
}

export { validateData }
