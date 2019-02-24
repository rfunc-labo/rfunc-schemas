#!/usr/bin/env node

/**
 * Compile to browser source
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('ape-tasking')
const ababel = require('ababel')
const filecopy = require('filecopy')
runTasks('browser', [
  () => ababel('**/*.js', {
    cwd: 'lib',
    out: 'shim/browser'
  }),
  () => filecopy('lib/*.json', 'shim/browser')
], true)
