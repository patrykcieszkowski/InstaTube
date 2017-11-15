import { StyleSheet } from 'aphrodite'

import inputs from './inputs'
import buttons from './buttons'
import form from './form'
import main from './main'
import labels from './labels'
import errors from './errors'

export default {
  inputs: StyleSheet.create(inputs),
  buttons: StyleSheet.create(buttons),
  form: StyleSheet.create(form),
  main: StyleSheet.create(main),
  labels: StyleSheet.create(labels),
  errors: StyleSheet.create(errors)
}
