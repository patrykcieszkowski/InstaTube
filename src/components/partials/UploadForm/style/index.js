import { StyleSheet } from 'aphrodite'

import dropzone from './dropzone'
import form from './form'
import message from './message'
import views from './views'
import links from './links'
import sliders from './sliders'
import errors from './errors'
import main from './main'
import status from './status'

export default {
  form: StyleSheet.create(form),
  message: StyleSheet.create(message),
  views: StyleSheet.create(views),
  dropzone: StyleSheet.create(dropzone),
  links: StyleSheet.create(links),
  sliders: StyleSheet.create(sliders),
  errors: StyleSheet.create(errors),
  main: StyleSheet.create(main),
  status: StyleSheet.create(status)
}
