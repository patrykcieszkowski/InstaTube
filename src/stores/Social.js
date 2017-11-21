/* eslint-disable */
import { observable, action } from 'mobx'
import axios from 'axios'

class Social {
  @observable
  data = {
    response: {
      data: [],
      instagram: {}
    },
    error: null
  }

  @action
  fetch() {
    const API_URL = process.env.REACT_APP_API_URL
    axios
      .get(`${API_URL}/customer/social`)
      .then(res => {
        if (res.data.data) {
          this.data.response = res.data
        }
      })
      .catch(console.log)
  }
}

export default new Social()
