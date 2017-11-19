/* eslint-disable */
import { observable, action } from 'mobx'
import axios from 'axios'

class Config {
  @observable instagram = {}

  @action fetch() {
    const API_URL = process.env.REACT_APP_API_URL
    axios
      .get(`${API_URL}/config`)
      .then(res => {
        this.instagram = res.data.instagram
      })
      .catch(console.log)
  }
}

export default new Config()