/* eslint-disable */
import { observable, action } from 'mobx'
import axios from 'axios'

class Social {
  @observable
  data = {
    data: {
      data: [],
      instagram: {}
    },
    response: {}
  }

  @action
  fetch() {
    const API_URL = process.env.REACT_APP_API_URL
    axios
      .get(`${API_URL}/customer/social`)
      .then(res => {
        if (res.data.data) {
          this.data.data = res.data
        }
      })
      .catch(console.log)
  }

  @action
  delete(data) {
    const formData = new FormData()
    formData.append('social[login]', data.login)

    const API_URL = process.env.REACT_APP_API_URL
    axios
      .post(`${API_URL}/actions/removesocial`, formData)
      .then(res => {
        const index = this.data.data.data
          .slice()
          .findIndex(a => a.name === data.login)
        this.data.data.data.replace([
          ...this.data.data.data.slice(0, index),
          {
            ...this.data.data.data[index],
            hide: true
          },
          ...this.data.data.data.slice(index + 1)
        ])

        setTimeout(() => {
          this.data.data.data.replace([
            ...this.data.data.data.slice(0, index),
            ...this.data.data.data.slice(index + 1)
          ])
        }, 500)
      })
      .catch(err => {
        this.data.response = err.response.data
        console.log(err)
      })
  }
}

export default new Social()
