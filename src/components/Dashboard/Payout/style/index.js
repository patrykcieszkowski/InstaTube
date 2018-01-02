import { StyleSheet } from 'aphrodite'

import main from './main'
import history from './history'
import circle from './circle'
import withdraw from './withdraw'
import errors from './errors'

export default {
  main: StyleSheet.create(main),
  history: StyleSheet.create(history),
  circle: StyleSheet.create(circle),
  withdraw: StyleSheet.create(withdraw),
  errors: StyleSheet.create(errors)
}
