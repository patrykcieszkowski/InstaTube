/* eslint-disable */
import { observable, action } from 'mobx'

class Uploads {
  @observable all = [
    {
      "id" : 243,
      "file" : "How make makeup?",
      "views" : 170,
      "seen" : 50,
      "active" : 1,
      "price" : "2541.52",
      "earn" : "560.41",
      "url" : "http://it.oz/asd231",
      "end" : "2017-12-12",
      "date" : "2017-12-10"
    },
    {
      "id" : "243",
      "file" : "How make makeup?",
      "date" : "2017-12-10"
    },
    {
      "id" : "243",
      "file" : "How make makeup?",
      "date" : "2017-12-10"
    },
    {
      "id" : "243",
      "file" : "How make makeup?",
      "date" : "2017-12-10"
    },
    {
      "id" : "243",
      "file" : "How make makeup?",
      "date" : "2017-12-10"
    },
    {
      "id" : "243",
      "file" : "How make makeup?",
      "date" : "2017-12-10"
    },
    {
      "id" : "243",
      "file" : "How make makeup?",
      "date" : "2017-12-10"
    },
    {
      "id" : "243",
      "file" : "How make makeup?",
      "date" : "2017-12-10"
    }
  ]  

  @action deleteItem = (index) => {
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
  }

  @action setDateAction = (index, state) => {
    this.all.replace([
      ...this.all.slice(0, index),
      {
        ...this.all[index],
        actionDateToggle: state ? !this.all[index].copyActionToggle : state
      },
      ...this.all.slice(index + 1)
    ])
  }

  @action setCopyAction = (index) => {
    this.all.replace([
      ...this.all.slice(0, index),
      {
        ...this.all[index],
        copyActionToggle: !this.all[index].copyActionToggle
      },
      ...this.all.slice(index + 1)
    ])
  }
}

export default new Uploads()