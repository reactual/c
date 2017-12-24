import chalk from 'chalk'
import { inspect } from 'util'
import _defaults from './_defaults'
import cfg from './config'
import dict from './dictionary'
import f from './formats'
import jsome from 'jsome'

jsome.level = {
    'show'    : false
  , 'char'    : '|'
  , 'color'   : 'gray'
  , 'spaces'  : 2
  , 'start'   : 0
}


/**
 * @name c
 * @description Prettifier library for console logging in Node.js.
 * Allows you to customize a dictionary of settings
 * to control things like, colors, formatting, environment
 * specific preferences and forwarding of messages to other
 * utilites/systems.
 *
 * @param  {String} msg           Message to log
 * @param  {Any}    val           Value to log
 * @param  {String} [type='info'] Type of log, will get settings from dict
 *
 * @return {undefined}            Doesn't return anything, only handles message
 *                                according to settings
 *
 * @todo
 * 1. Refactor from inital dev project.
 * 2. Add tests.
 * 3. Add server startup tests to verify config/dictionary schema and
 *    verify method/handlers are valid, to prevent any thrown
 *    errors while processing messages during runtime
 * 4. user class/dict / refactor (flow/typescript/closure compiler ...)
 */
export default (msg, val, type = 'info') => {

  try {

    const o = dict[type] || _defaults
    const ___ = chalk[o.c](f.divider)

    console[o.fn](
      chalk[o.c](f.nn, o.label, f.pipe),
      msg,
      ___
    )
    typeof val === 'function' ? console[o.fn](inspect(val, cfg.inspect)) : jsome(val)
    console[o.fn](
      ___
    )

  } catch (err) {

    /** @todo Handle errors */
    console.error('@reactual/c library, caught error processing msg', err)
    throw new Error('Err Catch - @reactual/c, while processing msg', err)

  } finally {
    return void 0
  }
}
