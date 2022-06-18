
function checkIfThereIsData(fieldData) {
  return !!fieldData && fieldData.length > 0
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
    defaultErrorMessage: 'length should be at least {value} characters',
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
  const errors = []

  for (const fieldName in data) {
    const validationCriteria = (fieldsValidationRules.find(fieldValidationRules => fieldValidationRules.name === fieldName))
    if (!validationCriteria) continue
    const rules = validationCriteria.rules

    rules.some((rule) => {
      const ruleInstructions = rulesInstructions.find(elem => elem.ruleName === rule.ruleName)
      const response = ruleInstructions.checkFunc(data[fieldName], rule.value)
      if (!response) {
        let errorMessage = rule.SpecificErrorMessage || ruleInstructions.defaultErrorMessage
        errorMessage = errorMessage.replace('{fieldName}', fieldName).replace('{value}', rule.value)

        errors.push({
          fieldName,
          errorMessage,
        })

        return true
      }
      return false
    },
    )
  }

  return errors
}

export { validateData }
