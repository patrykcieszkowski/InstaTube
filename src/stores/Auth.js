import { observable, computed, action } from 'mobx'
import autoStore from './autoStore'

class Auth {
  constructor() {
    autoStore("auth", this)
  }

  @observable auth = false

  @computed get isAuthenticated() {
    return this.auth
  }

  @action setAuthenticationStatus(status) {
    this.auth = !!(status)
  }

  @action login() {
    // login action
  }

  @action register() {
    // register action
  }

  @action remind() {
    // remind action
  }
}

const AuthStore = window.AuthStore = new Auth()
export default AuthStore