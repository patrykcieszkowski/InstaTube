import { StyleSheet } from 'aphrodite'

import inputs from './inputs'
import buttons from './buttons'
import form from './form'
import links from './links'
import grid from './grid'
import sider from './sider'
import login from './login'
import main from './main'
import content from './content'
import errors from './errors'

export default {
  inputs: StyleSheet.create(inputs),
  buttons: StyleSheet.create(buttons),
  form: StyleSheet.create(form),
  links: StyleSheet.create(links),
  grid: StyleSheet.create(grid),
  sider: StyleSheet.create(sider),
  login: StyleSheet.create(login),
  main: StyleSheet.create(main),
  content: StyleSheet.create(content),
  errors: StyleSheet.create(errors)
}
