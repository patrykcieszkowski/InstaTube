import { observable } from 'mobx'
import autoStore from './autoStore'

class Auth {
  constructor() {
    autoStore("auth", this)
  }

  @observable auth = null

  @computed get isAuthenticated() {
    return !!(this.auth)
  }

  @action login() {
    // login action
  }

  @computed get getToken() {
    if (!this.auth) {
      return null
    }

    return this.authorization.match(/(?:Bearer\s+)?(\w+\.\w+\.\w+)/)[1]
  }

  @action setToken(token) {
    this.auth = `Bearer ${token}`
  }
}

const AuthStore = window.AuthStore = new Auth
export default AuthStore