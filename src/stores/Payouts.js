/* eslint-disable */
import { observable, action } from 'mobx'

/* eslint-disable no-unused-vars */
class Payouts {
  @observable all = []

  @action
  fetch() {
    // fetch action

    this.all = [
      {
        status: 'In progress',
        id_status: 2,
        id: 243,
        file: 'How make makeup?',
        date: '2017-12-10',
        pay: '5'
      },
      {
        status: 'Complete',
        id_status: 3,
        id: 243,
        file: 'How make makeup?',
        date: '2017-12-10',
        pay: '5'
      },
      {
        status: 'Fail',
        id_status: 1,
        id: 243,
        file: 'How make makeup?',
        date: '2017-12-10',
        pay: '5'
      },
      {
        status: 'Complete',
        id_status: 3,
        id: 243,
        file: 'How make makeup?',
        date: '2017-12-10',
        pay: '5'
      },
      {
        status: 'Fail',
        id_status: 1,
        id: 243,
        file: 'How make makeup?',
        date: '2017-12-10',
        pay: '5'
      }
    ]
  }
}

export default new Payouts()
