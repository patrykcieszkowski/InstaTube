import { observable, computed, action } from 'mobx'
import axios from 'axios'

class UploadForm {
  @observable request = null
  @observable error = null
  @observable response = null
  @observable progress = 20

  @action
  upload(data, file) {
    const uri = '/'

    const formData = new FormData()
    formData.append('upload[message]', data.message)
    formData.append('upload[houre]', data.validity.hour)
    formData.append('upload[display]', data.displayTime)
    formData.append('upload[minutes]', data.validity.minute)
    formData.append('upload[ppi]', data.viewTypes.instagram)
    formData.append('upload[ppv]', data.viewTypes.ppv)
    formData.append('upload[file]', file)

    if (data.views.view) {
      formData.append('upload[nolimit]', !!data.views.view)
    } else {
      formData.append('upload[views]', data.views.number || 1)
    }

    const config = {
      // onUploadProgress: function(e) {
      //   this.progress = Math.floor(e.loaded * 100 / e.total)
      // },
      headers: { 'Content-Type': 'multipart/form-data' }
    }

    const API_URL = process.env.REACT_APP_API_URL

    return new Promise((resolve, reject) => {
      this.request = axios
        .post(`${API_URL}/add`, formData, config)
        .then(res => {
          this.request = null
          this.response = res.data
          this.progress = 0
          return resolve(res)
        })
        .catch(err => {
          this.request = null
          this.error = err.response ? err.response.data : null
          this.progress = 0
          return reject(err)
        })
    })
  }

  @action
  reset() {
    this.request = null
    this.error = null
    this.response = null
    this.progress = 0
  }

  @computed
  get getProgress() {
    if (!this.progress) {
      return null
    }

    return this.progress
  }
}

export default new UploadForm()
