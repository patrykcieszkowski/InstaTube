/* eslint-disable */
import { observable, action } from 'mobx'
import axios from 'axios'

class Social {
  @observable
  data = {
    response: {
      instagram: {}
    },
    error: null
  }

  @action
  fetch() {
    // const API_URL = process.env.REACT_APP_API_URL
    // axios.post(`${API_URL}/customer/social`)
    //   .then((res) => {
    //   this.data.response = res.data
    // })
    //   .catch(console.log)

    this.data.response.instagram = {
      data: ['abc', 'def'],
      apikey: 'key',
      url: 'url'
    }
  }
}

export default new Social()
