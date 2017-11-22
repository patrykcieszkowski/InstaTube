/* eslint-disable */
import { observable, action } from 'mobx'
import axios from 'axios'

class Uploads {
  @observable all = []

  @action
  fetch() {
    const API_URL = process.env.REACT_APP_API_URL
    axios
      .get(`${API_URL}/customer/files`)
      .then(res => {
        this.all.replace(Array.isArray(res.data) ? res.data : this.all.slice())
      })
      .catch(console.log)
  }

  @action
  deleteItem(index) {
    const item = this.all[index]

    this.all.replace([
      ...this.all.slice(0, index),
      {
        ...this.all[index],
        hide: true
      },
      ...this.all.slice(index + 1)
    ])

    setTimeout(() => {
      this.all.replace([
        ...this.all.slice(0, index),
        ...this.all.slice(index + 1)
      ])
    }, 500)

    const formData = new FormData()
    formData.append(`remove[url]`, item.url)

    const API_URL = process.env.REACT_APP_API_URL
    axios.post(`${API_URL}/actions/remove`, formData).catch(console.log)
  }

  @action
  extendItem(index) {
    const item = this.all[index]

    const formData = new FormData()
    formData.append(`extend[url]`, item.url)

    const API_URL = process.env.REACT_APP_API_URL
    axios
      .post(`${API_URL}/actions/extend`, formData)
      .then(res => {
        this.all.replace([
          ...this.all.slice(0, index),
          {
            ...this.all[index],
            active: 1,
            end: res.data.end
          },
          ...this.all.slice(index + 1)
        ])
      })
      .catch(console.log)
  }

  @action
  setDateAction = (index, state) => {
    this.all.replace([
      ...this.all.slice(0, index),
      {
        ...this.all[index],
        actionDateToggle: state
          ? !this.all[index].copyActionToggle ||
            this.all[index].nameActionToggle
          : state
      },
      ...this.all.slice(index + 1)
    ])
  }

  @action
  setCopyAction = index => {
    this.all.replace([
      ...this.all.slice(0, index),
      {
        ...this.all[index],
        copyActionToggle: !this.all[index].copyActionToggle
      },
      ...this.all.slice(index + 1)
    ])
  }

  @action
  setNamePopupAction = index => {
    this.all.replace([
      ...this.all.slice(0, index),
      {
        ...this.all[index],
        nameActionToggle: !this.all[index].nameActionToggle
      },
      ...this.all.slice(index + 1)
    ])
  }

  @action
  setName = data => {
    const item = this.all[data.index]

    this.all.replace([
      ...this.all.slice(0, data.index),
      {
        ...this.all[data.index],
        name: data.name,
        nameActionToggle: false
      },
      ...this.all.slice(data.index + 1)
    ])

    const formData = new FormData()
    formData.append(`edit[name]`, data.name)
    formData.append(`edit[url]`, item.url)

    const API_URL = process.env.REACT_APP_API_URL
    axios.post(`${API_URL}/actions/name`, formData).catch(console.log)
  }
}

export default new Uploads()
