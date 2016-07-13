/**
 * Test for index
 * Runs with mocha
 */
'use strict'

const index = require('../lib/index')
const assert = require('assert')
const co = require('co')

describe('index', function () {
  it('Eval props', () => co(function * () {
    for (let name of Object.keys(index)) {
      assert.ok(index[ name ])
    }
  }))
})

/* global describe, it */
