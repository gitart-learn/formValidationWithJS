function getSelectedRadio(inputName) {
  const radios = document.querySelectorAll(`input[name="${inputName}"]`)
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) return radios[i].value
  }

  return null
}

function getSelectedCheckboxes(inputName) {
  const chosenCheckboxes = []
  const checkboxes = document.querySelectorAll(`input[name="${inputName}"]`)
  checkboxes.forEach((i) => {
    if (i.checked) { chosenCheckboxes.push(i.value) }
  })
  if (chosenCheckboxes.length === 0) return null
  return chosenCheckboxes
}

function getDataFromForm(form, fields) {
  const formData = new FormData(form)
  const data = {}
  fields.forEach((e) => {
    switch (e.type) {
      case 'switcher':
        data[e.inputName] = !!formData.get(e.inputName)
        break
      case 'radio':
        data[e.inputName] = getSelectedRadio(e.inputName)
        break
      case 'checkbox':
        data[e.inputName] = getSelectedCheckboxes(e.inputName)
        break
      case 'text':
        data[e.inputName] = formData.get(e.inputName)
        break
      case 'date':
        data[e.inputName] = formData.get(e.inputName)
        break
    }
  })

  return data
}

export { getDataFromForm, getSelectedRadio }
