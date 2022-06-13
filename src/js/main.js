
import '../sass/main.scss'
import { getDataFromForm } from './getDataFromForm'
import { validateData } from './validateData'
import { handelResponse } from './handelResponse'

// const form1 = document.querySelector('#form1')

// form1.onsubmit = (e) => {
//   e.preventDefault()

//   const data = getDataFromForm(form1, [
//     {
//       inputName: 'title',
//       type: 'text',
//     },
//     {
//       inputName: 'content',
//       type: 'text',
//     },
//     {
//       inputName: 'date',
//       type: 'date',
//     },
//     {
//       inputName: 'category',
//       type: 'radio',
//     },
//     {
//       inputName: 'show',
//       type: 'switcher',
//     },
//     {
//       inputName: 'tag',
//       type: 'checkbox',
//     },

//   ])
//   console.log(data)
// }

const form = document.querySelector('#form')

form.onsubmit = (e) => {
  e.preventDefault()

  const fieldsToCheck = [
    {
      inputName: 'title',
      type: 'text',
    },
    {
      inputName: 'email',
      type: 'text',
    },
    {
      inputName: 'phoneCode',
      type: 'text',
    },
    {
      inputName: 'phone',
      type: 'text',
    },
    {
      inputName: 'content',
      type: 'text',
    },
    {
      inputName: 'date',
      type: 'date',
    },
    {
      inputName: 'category',
      type: 'radio',
    },
    {
      inputName: 'radio',
      type: 'radio',
    },
    {
      inputName: 'show',
      type: 'switcher',
    },
    {
      inputName: 'tag',
      type: 'checkbox',
    },

  ]
  const data = getDataFromForm(form, fieldsToCheck)
  console.log('data')
  console.log(data)
  const fieldsValidationRules = [
    {
      name: 'title',
      rules: [
        {
          ruleName: 'required',
          SpecificErrorMessage: 'i said title is a required field',
        },
        {
          ruleName: 'minLength',
          value: 3,

        },
      ],
    },

    {
      name: 'content',
      rules: [{
        ruleName: 'required',
      },
      {
        ruleName: 'minLength',
        value: 20,
      }],
    },
    {
      name: 'email',
      rules: [{
        ruleName: 'required',
      },
      {
        ruleName: 'email',
      }],
    },
    {
      name: 'phone',
      rules: [{
        ruleName: 'required',
      },
      {
        ruleName: 'phone',
      }],
    },
    {
      name: 'date',
      rules: [{
        ruleName: 'required',
      }],
    },
    {
      name: 'category',
      rules: [{
        ruleName: 'required',
      }],
    },
    {
      name: 'radio',
      rules: [{
        ruleName: 'required',
      }],
    },
    {
      name: 'show',
      rules: [{
        ruleName: 'required',
      }],
    },
    {
      name: 'tag',
      rules: [{
        ruleName: 'required',
      }],
    },

  ]
  const validationResponse = validateData(data, fieldsValidationRules)
  console.log('response: ')

  validationResponse.forEach(elem => console.log(elem))

  handelResponse(validationResponse, form, fieldsToCheck)
}
