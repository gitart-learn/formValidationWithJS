function showErrorOnPage(response) {
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

      field.addEventListener('input', () => {
        const feedback = field.parentElement.parentElement.querySelector('.invalid-feedback')
        if (feedback) {
          feedback.remove()
        }
        // const responseAfterInput = ruleInstructions.checkFunc(getSelectedRadio(fieldName), rule.value)
        // console.log(responseAfterInput)
        // console.log('get radio again', fieldName, getSelectedRadio(fieldName))
        // if (responseAfterInput) {
        //   field.classList.remove('error')
        //   const feedback = field.parentElement.parentElement.querySelector('.invalid-feedback')
        //   if (feedback) {
        //     feedback.remove()
        //   }
        // }
      },
      )
    },
    )
  },
  )
}

export { showErrorOnPage }
