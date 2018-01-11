/*eslint-disable */
import { observable, action, computed } from 'mobx'
import axios from 'axios'

class User {
  @observable
  profile = {
    data: {},
    response: {
      content: 'test'
    }
  }
  @observable
  password = {
    response: {}
  }
  @observable
  dashboard = {
    data: {},
    response: {}
  }

  @computed
  get getNames() {
    return {
      name: this.profile.data.name,
      surname: this.profile.data.surname
    }
  }

  @action
  fetchProfile() {
    const API_URL = process.env.REACT_APP_API_URL
    axios
      .get(`${API_URL}/customer/profile`)
      .then(res => {
        this.profile.data = res.data
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
    const formData = new FormData()
    Object.keys(data).forEach(key =>
      formData.append(`profile[${key}]`, data[key])
    )

    // update request
    const API_URL = process.env.REACT_APP_API_URL
    axios
      .post(`${API_URL}/actions/profile`, formData)
      .then(res => {
        this.profile.data = { ...data }
        this.profile.response = res.data
      })
      .catch(err => {
        this.profile.response = err.response ? err.response.data : null
      })
  }

  @action
  postPassword(data) {
    const formData = new FormData()
    Object.keys(data).forEach(key =>
      formData.append(`password[${key}]`, data[key])
    )

    // update request
    const API_URL = process.env.REACT_APP_API_URL
    axios
      .post(`${API_URL}/actions/password`, formData)
      .then(res => {
        this.password.data = { ...data, password: null, confirm: null }
        this.password.response = res.data
      })
      .catch(err => {
        this.password.response = err.response ? err.response.data : null
      })
  }

  @action deleteAccount() {
    const API_URL = process.env.REACT_APP_API_URL
    return axios.post(`${API_URL}/actions/delete`)
  }

  @computed
  get getTransfer() {
    return this.dashboard.data.transfer
  }

  @action
  fetchDashboard() {
    const API_URL = process.env.REACT_APP_API_URL
    axios
      .get(`${API_URL}/customer/data`)
      .then(res => {
        this.dashboard.data = res.data
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

  @action clearErrors(type) {
    if (!this[type]) {
      return
    }

    this[type].response = {}
  }
}

export default new User()
