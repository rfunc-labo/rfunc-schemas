'use strict'

const { InvokeSchema } = require('rfunc-schemas')
const aschema = require('aschema')

let errors = aschema(InvokeSchema).validate({
  // Values to validate
  /* ... */
})
