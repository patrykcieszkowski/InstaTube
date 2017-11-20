/* eslint-disable */
import { observable, action } from 'mobx'
import axios from 'axios'

/* eslint-disable no-unused-vars */
class Payouts {
  @observable all = []
  @observable withdrawResponse = {}

  @action
  fetch() {
    const API_URL = process.env.REACT_APP_API_URL
    axios
      .get(`${API_URL}/customer/payouts`)
      .then(res => {
        this.all = (Array.isArray(res.data)) ? res.data : []
      })
      .catch(console.log)

    //fetch action

    // this.all = [
    //   {
    //     "amount": "40.00",
    //     "currency": "USD",
    //     "id_status": "2",
    //     "start": "2017-11-14 00:00:00"
    //   },
    //   {
    //     "amount": "20.00",
    //     "currency": "USD",
    //     "id_status": "1",
    //     "start": "2017-11-14 00:00:00"
    //   },
    //   {
    //     "amount": "50.00",
    //     "currency": "USD",
    //     "id_status": "0",
    //     "start": "2017-11-14 00:00:00"
    //   }
    // ]
  }

  @action
  withdraw() {
    const API_URL = process.env.REACT_APP_API_URL
    axios.post(`${API_URL}/actions/withdraw`).catch(err => {
      this.withdrawResponse = {
        error: err.response ? err.response.data.content : null
      }
    })
  }
}

export default new Payouts()
