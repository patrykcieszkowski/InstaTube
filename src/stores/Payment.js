/* eslint-disable */
import { observable, action } from 'mobx'
import axios from 'axios'

class Payment {
  @observable response = null

  @action
  payByCard(data) {
    const formData = new FormData()
    Object.keys(data).forEach(key => formData.append(`pay[${key}]`, data[key]))

    const API_URL = process.env.REACT_APP_API_URL
    axios
      .post(`${API_URL}/payment/paybycard`, formData)
      .then(res => {
        this.response = res.data
        if (res.data.success) {
          window.location.reload()
        }
      })
      .catch(err => {
        this.response = err.response.data
      })
  }

  @action clearErrors() {
    this.response = null
  }
}

export default new Payment()
