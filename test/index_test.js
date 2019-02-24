/**
 * Test for index
 * Runs with mocha
 */
'use strict'

const index = require('../lib/index')
const assert = require('assert')

describe('index', function () {
  it('Eval props', () => {
    for (let name of Object.keys(index)) {
      assert.ok(index[name])
    }
  })
})

/* global describe, it */
