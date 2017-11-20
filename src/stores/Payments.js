/* eslint-disable */
import { observable, action } from 'mobx'
import axios from 'axios'

class Payments {
  @observable all = []

  @action
  fetch() {
    const API_URL = process.env.REACT_APP_API_URL    
    axios.get(`${API_URL}/customer/payments`)
      .then((res) => {
      this.all = res.data || []
    })
      .catch(console.log)

    //fetch action

    // this.all = [
    //   {
    //     "amount": "2.00",
    //     "currency": "USD",
    //     "date": "2017-11-14 00:00:00",
    //     "name": "tenor"
    //   },
    //   {
    //     "amount": "2.00",
    //     "currency": "USD",
    //     "date": "2017-11-14 00:00:00",
    //     "name": "tenor"
    //   }
    // ]
  }
}

export default new Payments()
