/**
 * Schemas for rfunc
 * @module rfunc-schemas
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get InvokeSchema () { return d(require('./invoke_schema')) },
  get SpecSchema () { return d(require('./spec_schema')) }
}
