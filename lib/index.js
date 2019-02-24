/**
 * Schemas for rfunc
 * @module rfunc-schemas
 */

'use strict'


const InvokeSchema = require('./invoke_schema.json')
const SpecSchema = require('./spec_schema.json')

exports.InvokeSchema = InvokeSchema
exports.SpecSchema = SpecSchema

module.exports = {
  InvokeSchema,
  SpecSchema
}
