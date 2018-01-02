import { observable, computed, action } from 'mobx'
import axios from 'axios'
import superagent from 'superagent'

class UploadForm {
  @observable request = null
  @observable error = null
  @observable response = null
  @observable progress = 0

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

    const API_URL = process.env.REACT_APP_API_URL
    const config = {
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: function(e) {
        this.progress = Math.floor(e.loaded * 100 / e.total)
      }
    }

    return new Promise((resolve, reject) => {
      this.request = superagent
        .post(`${API_URL}/add`)
        .send(formData)
        .on('progress', e => {
          this.progress = Math.floor(e.percent)
        })
        .end((err, res) => {
          if (err) {
            this.request = null
            this.error = res.body ? res.body.content : null
            this.progress = 0
            return reject(res.body)
          }

          this.request = null
          this.response = res.body
          this.progress = 0
          return resolve(res.body)
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
