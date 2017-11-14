/* eslint-disable */
import { observable, action } from 'mobx'
import axios from 'axios'

class Premium {
  @observable all = []

  @action
  fetch() {
    const API_URL = process.env.REACT_APP_API_URL    
    axios.get(`${API_URL}/customer/premium`)
      .then((res) => {
      this.all = res
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
}

export default new Premium()
