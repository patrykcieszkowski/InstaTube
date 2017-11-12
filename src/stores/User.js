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
    /*
    const API_URL = process.env.REACT_APP_API_URL    
    axios.get(`${API_URL}/profile`)
      .then((res) => {
      this.dashboard = res
    })
      .catch(console.log)
    */

    // fetch request here
    this.profile = {
      name: 'Piotr',
      surname: 'Szymański',
      address: 'Sienna 45',
      zip: '45-251',
      city: 'Warszawa',
      bank: '548745688112546'
    }
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
    /*
    const API_URL = process.env.REACT_APP_API_URL    
    axios.get(`${API_URL}/dashboard`)
      .then((res) => {
      this.dashboard = res
    })
      .catch(console.log)
    
    */
    // fetch request here
    this.dashboard = {
      transfer: '453',
      withdraw: '58423',
      currency: 'USD',
      name: 'Piotr Szymański',
      email: 'biuro@desineo.pl'
    }
  }
}

export default new User()
