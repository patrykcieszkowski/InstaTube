/*eslint-disable */
import { observable, action, computed } from 'mobx'
import axios from 'axios'

class User {
  @observable profile = {}
  @observable dashboard = {}

  @computed
  get getNames() {
    return {
      name: this.profile.name,
      surname: this.profile.surname
    }
  }

  @action
  fetchProfile() {
    const API_URL = process.env.REACT_APP_API_URL    
    axios.get(`${API_URL}/customer/profile`)
      .then((res) => {
      this.dashboard = res.data
    })
      .catch(console.log)


    // fetch request here
    // this.profile = {
    //   "name": "",
    //   "surname": "",
    //   "address": "",
    //   "zip": "",
    //   "city": "",
    //   "bank": ""
    // }
  }

  @action
  postProfile(data) {
    // update request
    const API_URL = process.env.REACT_APP_API_URL
    this.profile = { ...data, password: null, password_confirm: null }
    axios.post(`${API_URL}/profile`, data)
  }

  @computed
  get getTransfer() {
    return this.dashboard.transfer
  }

  @action
  fetchDashboard() {
    const API_URL = process.env.REACT_APP_API_URL    
    axios.get(`${API_URL}/customer/data`)
      .then((res) => {
      this.dashboard = res.data[0]
    })
      .catch(console.log)
    
    // fetch request here
    // this.dashboard =
    // {
    //   "email": "biuro@desineo.pl",
    //   "space": "2000",
    //   "total": "1254.00",
    //   "currency": "USD"
    // }
  }
}

export default new User()
