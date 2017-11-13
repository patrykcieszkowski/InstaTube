/* eslint-disable */
import { observable, computed, action } from 'mobx'
import axios from 'axios'
import autoStore from './autoStore'

class Auth {
  constructor() {
    autoStore('auth', this)
  }

  @observable
  auth = {
    facebook: null,
    instagram: null,
    local: false
  }

  @observable
  response = {
    login: null,
    register: null,
    remind: null
  }

  @computed
  get isAuthenticated() {
    return this.auth
  }

  @action
  setAuthenticationStatus(type, status) {
    this.auth[type] = status
  }

  @action
  login(data) {
    const API_URL = process.env.REACT_APP_API_URL
    axios.post(`${API_URL}/auth/login`, data)
    .then((res) => {
      this.auth.local = true
      this.response = {
        login: null,
        register: null,
        remind: null
      }
    })
    .catch((err) => {
      this.auth = {
        facebook: null,
        instagram: null,
        local: false
      }
  
      this.response = {
        login: { type: 'error', data: err.data },
        register: null,
        remind: null
      }
    })
  }

  @action
  logout() {
    this.auth = {
      facebook: null,
      instagram: null,
      local: false
    }

    this.response = {
      login: null,
      register: null,
      remind: null
    }
  }

  @action
  validateFacebookToken() {
    /*
    const API_URL = process.env.REACT_APP_API_URL
    axios.post(`${API_URL}/validate/facebook`, { accessToken: this.auth.facebook.accessToken })
      .then((res) => {
      this.auth.local = true
      this.response = {
        login: null,
        register: null,
        remind: null
      }
    })
      .catch((err) => {
      this.auth = {
        facebook: null,
        instagram: null,
        local: false
      }
  
      this.response = {
        login: null,
        register: null,
        remind: null
      }
    })
    */
    // verify token on the server
    this.auth.local = true
  }

  @action
  signInWithInstagram(redirectURI) {
    const INSTAGRAM_CLIENT_ID = process.env.REACT_APP_INSTAGRAM_CLIENT_ID
    const newURI = `https://api.instagram.com/oauth/authorize/?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${redirectURI}&response_type=token`
    window.location.href = newURI
  }

  @action
  validateInstagramToken() {
    /*
    const API_URL = process.env.REACT_APP_API_URL
    axios.post(`${API_URL}/validate/instagram`, { accessToken: this.auth.instagram.accessToken })
      .then((res) => {
      this.auth.local = true
      this.response = {
        login: null,
        register: null,
        remind: null
      }
    })
      .catch((err) => {
      this.auth = {
        facebook: null,
        instagram: null,
        local: false
      }
  
      this.response = {
        login: null,
        register: null,
        remind: null
      }
    })
    */
    // verify token on the server
    this.auth.local = true
  }

  @action
  validateAuthStatus() {
    /*
    const API_URL = process.env.REACT_APP_API_URL
    axios.post(`${API_URL}/status`)
      .then((res) => {
      this.auth.local = true
      this.response = {
        login: null,
        register: null,
        remind: null
      }
    })
      .catch((err) => {
      this.auth = {
        facebook: null,
        instagram: null,
        local: false
      }
  
      this.response = {
        login: null,
        register: null,
        remind: null
      }
    })
    */
    this.auth.local = true
  }

  @action
  register(data) {
    const API_URL = process.env.REACT_APP_API_URL
    axios
      .post(`${API_URL}/auth/register`, data)
      .then(res => {
        this.response = {
          login: null,
          register: null,
          remind: null
        }
      })
      .catch(err => {
        this.response = {
          login: null,
          register: { type: 'error', data: err.data },
          remind: null
        }
      })
    // register action
  }

  @action
  remind(data) {
    const API_URL = process.env.REACT_APP_API_URL
    axios
      .post(`${API_URL}/auth/forgot`, data)
      .then(res => {
        this.response = {
          login: null,
          register: null,
          remind: { type: 'success', data: res.data }
        }
      })
      .catch(err => {
        this.response = {
          login: null,
          register: null,
          remind: { type: 'error', data: err.data }
        }
      })
  }
}

const AuthStore = (window.AuthStore = new Auth())
export default AuthStore
