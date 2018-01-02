/*eslint-disable */
import { observable, action } from 'mobx'
import axios from 'axios'

class Rules {
  @observable all = []

  @action
  fetch() {
    const API_URL = process.env.REACT_APP_API_URL
    axios
      .get(`${API_URL}/article/rules`)
      .then(res => {
        this.all = Array.isArray(res.data) ? res.data : []
      })
      .catch(console.log)
  }
}

export default new Rules()
