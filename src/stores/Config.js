/* eslint-disable */
import { observable, action } from 'mobx'
import axios from 'axios'

class Config {
  @observable instagram = {}
  @observable name = 'Instatube'

  @action
  fetch() {
    const API_URL = process.env.REACT_APP_API_URL
    axios
      .get(`${API_URL}/config`)
      .then(res => {
        this.instagram = res.data.instagram
        this.name = res.data.name || this.name
      })
      .catch(console.log)
  }
}

export default new Config()
