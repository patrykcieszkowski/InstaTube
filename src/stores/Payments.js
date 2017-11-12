/* eslint-disable */
import { observable, action } from 'mobx'

class Payments {
  @observable all = []

  @action
  fetch() {
    /*
    const API_URL = process.env.REACT_APP_API_URL    
    axios.get(`${API_URL}/payments`)
      .then((res) => {
      this.all = res
    })
      .catch(console.log)
    */
    //fetch action

    this.all = [
      {
        id: 243,
        title: 'How make makeup?',
        date: '2017-12-10',
        total: '180'
      },
      {
        id: 242,
        title: 'How make makeup?',
        date: '2017-12-10',
        total: '50'
      },
      {
        id: 241,
        title: 'How make makeup?',
        date: '2017-12-10',
        total: '72'
      }
    ]
  }
}

export default new Payments()
