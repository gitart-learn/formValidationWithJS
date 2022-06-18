function removeErrorFeedback(form) {
  const elementsWithError = form.querySelectorAll('.error')
  elementsWithError.forEach((elem) => {
    elem.classList.remove('error')
    const feedback = elem.parentElement.parentElement.querySelector('.invalid-feedback')
    if (feedback) feedback.remove()
  })
}

function addErrorFeedback(errors, form) {
  errors.forEach((error) => {
    const errorMessage = error.errorMessage
    const fieldName = error.fieldName
    const fieldsElements = form.querySelectorAll(`[name="${fieldName}"]`)

    fieldsElements.forEach((fieldElement) => {
      fieldElement.classList.add('error')
      if (!fieldElement.parentElement.parentElement.querySelector('.invalid-feedback')) {
        const error = document.createElement('div')
        error.classList.add('invalid-feedback')
        error.innerText = errorMessage
        fieldElement.parentElement.parentElement.appendChild(error)
      }
    },
    )
  },
  )
}
function handleErrors(errors, form) {
  removeErrorFeedback(form)

  addErrorFeedback(errors, form)
}

export { handleErrors }
