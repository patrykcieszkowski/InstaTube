/* eslint-disable */
import { observable, action } from 'mobx'
import axios from 'axios'

class Help {
  @observable all = []

  @action
  fetch() {
    const API_URL = process.env.REACT_APP_API_URL    
    axios.get(`${API_URL}/article/help`)
      .then((res) => {
      this.all = res.data
    })
      .catch(console.log)
  }
}

export default new Help()
