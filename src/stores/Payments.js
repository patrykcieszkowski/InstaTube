/* eslint-disable */
import { observable } from 'mobx'

class Payments {
  @observable all = [
    {
      "id" : 243,
      "title" : "How make makeup?",
      "date" : "2017-12-10",
      "total" : "180"
    },
    {
      "id" : 242,
      "title" : "How make makeup?",
      "date" : "2017-12-10",
      "total" : "50"
    },
    {
      "id" : 241,
      "title" : "How make makeup?",
      "date" : "2017-12-10",
      "total" : "72"
    }
  ]
}

export default new Payments()