
import './style.scss'
import openModal from '../defaultModal/defaultModal'
import '../defaultModal/defaultModal.scss'

import { fields, fieldsValidationRules } from './data/post-form'
import { fields as fieldsForForm1, fieldsValidationRules as fieldsValidationRulesForForm1 } from './data/post-form1'
import { addFormValidation } from './formHelpers/addFormValidation'

function logData(data) {
  console.log('data:', data)
}

function makeModalFromData(data) {
  const modal = document.createElement('div')
  modal.classList.add('modal-from-form-data')
  for (const inputName in data) {
    const div = document.createElement('div')
    div.innerText = data[inputName]
    modal.appendChild(div)
  }
  openModal(modal)
}

const form = document.querySelector('#form')
addFormValidation(form, fields, fieldsValidationRules, logData)

const form1 = document.querySelector('#form1')
addFormValidation(form1, fieldsForForm1, fieldsValidationRulesForForm1, makeModalFromData)
