/* eslint-disable */
import { observable, action } from 'mobx'
import axios from 'axios'

class Media {
  @observable media = null
  @observable error = null

  @observable
  ppv = {
    error: null
  }

  @action
  fetch(mediaId) {
    const API_URL = process.env.REACT_APP_API_URL
    axios
      .get(`${API_URL}/download/get/${mediaId}`)
      .then(res => {
        this.media = {
          ...res.data,
          display: res.data.display ? +res.data.display : null,
          views: +res.data.views,
          nolimit: !!res.data.nolimit,
          unlock: !res.data.hasOwnProperty('unlock') ? true : !!res.data.unlock,
          amount: !res.data.amount ? undefined : parseFloat(res.data.amount),
          premium: res.data.hasOwnProperty('display')
        }
      })
      .catch(err => {
        this.error = err.response.data
      })
  }

  @action
  pay(data) {
    const formData = new FormData()
    Object.keys(data).forEach(key => formData.append(`pay[${key}]`, data[key]))

    const API_URL = process.env.REACT_APP_API_URL
    axios
      .post(`${API_URL}/payment/create`, formData)
      .then(res => {
        if (res.data.success) {
          window.location.href = res.data.content
        }
      })
      .catch(err => (ppv.err = err.response.data))
  }
}

export default new Media()
