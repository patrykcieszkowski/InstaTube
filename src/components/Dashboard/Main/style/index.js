import { StyleSheet } from 'aphrodite'

import header from './header'
import payments from './payments'
import uploaded from './uploaded'
import shared from './shared'

export default {
  shared: StyleSheet.create(shared),
  header: StyleSheet.create(header),
  payments: StyleSheet.create(payments),
  uploaded: StyleSheet.create(uploaded)
}
