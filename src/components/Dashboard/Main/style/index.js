import { StyleSheet } from 'aphrodite'

import header from './header'
import payments from './payments'
import uploaded from './uploaded'
import shared from './shared'
import main from './main'
import grid from './grid'

export default {
  shared: StyleSheet.create(shared),
  header: StyleSheet.create(header),
  payments: StyleSheet.create(payments),
  uploaded: StyleSheet.create(uploaded),
  main: StyleSheet.create(main),
  grid: StyleSheet.create(grid)
}
