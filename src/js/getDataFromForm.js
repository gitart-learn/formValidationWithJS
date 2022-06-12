// this functions  dont work because they get values form all forms at the page
// function getSelectedRadio(inputName) {
//   const radios = document.querySelectorAll(`input[name="${inputName}"]`)
//   for (let i = 0; i < radios.length; i++) {
//     if (radios[i].checked) return radios[i].value
//   }

//   return null
// }

// function getSelectedCheckboxes(inputName) {
//   const chosenCheckboxes = []
//   const checkboxes = document.querySelectorAll(`input[name="${inputName}"]`)
//   console.log(checkboxes.length)
//   checkboxes.forEach((i) => {
//     if (i.checked) { chosenCheckboxes.push(i.value) }
//   })
//   if (chosenCheckboxes.length === 0) return null
//   return chosenCheckboxes
// }

function getDataFromField(field, form) {
  const formData = new FormData(form)
  switch (field.type) {
    case 'checkbox':
      return formData.getAll(field.inputName)
    default:
      return formData.get(field.inputName)
    // case 'switcher':
    //   return formData.getAll(field.inputName)
    // case 'radio':
    //   return formData.getAll(field.inputName)

    // case 'text': {
    //   return formData.getAll(field.inputName)
    // }

    // case 'date':
    //   return formData.get(field.inputName)
  }
}

function getDataFromForm(form, fields) {
  const data = {}
  fields.forEach((field) => {
    data[field.inputName] = getDataFromField(field, form)
  })

  return data
}

export { getDataFromForm }
