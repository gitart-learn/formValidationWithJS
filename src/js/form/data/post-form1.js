export const fields = [
  {
    inputName: 'title',
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

export const fieldsValidationRules = [
  {
    inputName: 'title',
    rules: [
      {
        ruleName: 'required',
        SpecificErrorMessage: 'i said title is a required field',
      },
      {
        ruleName: 'minLength',
        value: 3,
        SpecificErrorMessage: 'length of title  should be at least {value} characters',

      },
    ],
  },

  {
    inputName: 'content',
    rules: [{
      ruleName: 'required',
    },
    {
      ruleName: 'minLength',
      value: 20,
    }],
  },

  {
    inputName: 'date',
    rules: [{
      ruleName: 'required',
    }],
  },

  {
    inputName: 'radio',
    rules: [{
      ruleName: 'required',
    }],
  },
  {
    inputName: 'show',
    rules: [{
      ruleName: 'required',
    }],
  },
  {
    inputName: 'tag',
    rules: [{
      ruleName: 'required',
    }],
  },

]
