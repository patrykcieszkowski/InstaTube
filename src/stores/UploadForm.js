import { observable, computed, action } from 'mobx'
import axios from 'axios'

class UploadForm {

  @observable request = null
  @observable error = null
  @observable response = null
  @observable progress = 0

  @action upload(data, file) {
    const uri = '/'

    const formData = new FormData()
    Object.keys(data).forEach((key) => formData.append(key, data[key]))
    formData.append('file', file)

    const config = {
      onUploadProgress: (e) => {
        this.progress = Math.floor((e.loaded * 100) / e.total)
      }
    }

    this.request = axios.post(uri, formData, config)
      .then((response) => {
        this.upload = null    
        this.request = null
        this.response = response
        this.progress = 0
      })
      .catch((err) => {
        this.upload = null    
        this.request = null        
        this.error = err
        this.progress = 0        
      })
  }

  @action reset() {
    this.upload = null
    this.error = null
    this.response = null
    this.progress = 0    
  }

  @computed get getProgress() {
    if (!this.progress) {
      return null
    }

    return this.progress
  }
}

export default new UploadForm()