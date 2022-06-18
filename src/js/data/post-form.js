export const fields = [
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

export const fieldsValidationRules = [
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
        SpecificErrorMessage: 'length of title  should be at least {value} characters',

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
