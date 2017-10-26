import { StyleSheet } from 'aphrodite'

import dropzone from './dropzone'
import form from './form'
import message from './message'
import views from './views'
import links from './links'

export default {
  form: StyleSheet.create(form),
  message: StyleSheet.create(message),
  views: StyleSheet.create(views),
  dropzone: StyleSheet.create(dropzone),
  links: StyleSheet.create(links)
}
