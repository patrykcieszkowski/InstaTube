/* eslint-disable */
import { observable, action } from 'mobx'
import axios from 'axios'

class Premium {
  @observable all = []
  @observable error = null

  @action
  fetch() {
    const API_URL = process.env.REACT_APP_API_URL
    axios
      .get(`${API_URL}/customer/premiums`)
      .then(res => {
        this.all = Array.isArray(res.data) ? res.data : []
      })
      .catch(console.log)

    // this.all = [
    //   {
    //     "id_status": "2",
    //     "amount": "5.00",
    //     "currency": "USD",
    //     "end": "2017-12-14 00:00:00"
    //   },
    //   {
    //     "id_status": "0",
    //     "amount": "5.00",
    //     "currency": "USD",
    //     "end": "2017-11-14 00:00:00"
    //   },
    //   {
    //     "id_status": "1",
    //     "amount": "5.00",
    //     "currency": "USD",
    //     "end": "2017-11-13 00:00:00"
    //   }
    // ]
  }

  @action
  buy() {
    const API_URL = process.env.REACT_APP_API_URL
    axios
      .post(`${API_URL}/payment/create`)
      .then(res => {
        if (res.data.success) {
          window.location.href = res.data.content
        }
      })
      .catch(err => {
        this.error = err.response.data
      })
  }
}

export default new Premium()
