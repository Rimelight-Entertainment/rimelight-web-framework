#!/usr/bin/env node
import { defineCommand, runMain } from 'citty'
import make from './commands/make/index.mjs'

const main = defineCommand({
  meta: {
    name: 'rimelightWebFramework',
    description: 'Rimelight Web Framework CLI'
  },
  subCommands: {
    make
  }
})

runMain(main)
