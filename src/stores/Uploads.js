/* eslint-disable */
import { observable, action } from 'mobx'

class Uploads {
  @observable all = []

  @action
  fetch() {
    const API_URL = process.env.REACT_APP_API_URL    
    axios.get(`${API_URL}/customer/files`)
      .then((res) => {
      this.all = res.data
    })
      .catch(console.log)
    //fetch action

    // this.all = [
    //   {
    //     "id": "47",
    //     "name": "22279935_684810011726723_4273574299935798236_n",
    //     "url": "01d6d387",
    //     "views": "9999",
    //     "amount": "0.00",
    //     "currency": "USD",
    //     "end": "2017-11-14 16:42:19",
    //     "active": "1",
    //     "viewed": "0",
    //     "total": null
    //   },
    //   {
    //     "id": "48",
    //     "name": "ebay_print",
    //     "url": "70bbc9",
    //     "views": "9999",
    //     "amount": "0.00",
    //     "currency": "USD",
    //     "end": "2017-11-14 17:40:35",
    //     "active": "1",
    //     "viewed": "0",
    //     "total": null
    //   },
    //   {
    //     "id": "50",
    //     "name": "vpptoplogo",
    //     "url": "9d15",
    //     "views": "9999",
    //     "amount": "0.00",
    //     "currency": "USD",
    //     "end": "2017-11-14 21:39:06",
    //     "active": "1",
    //     "viewed": "0",
    //     "total": null
    //   },
    //   {
    //     "id": "51",
    //     "name": "botanic-garden-preview-1",
    //     "url": "66917e",
    //     "views": "9999",
    //     "amount": "0.00",
    //     "currency": "",
    //     "end": "2017-11-14 23:56:05",
    //     "active": "1",
    //     "viewed": "0",
    //     "total": null
    //   },
    //   {
    //     "id": "52",
    //     "name": "tenor",
    //     "url": "66e9d520",
    //     "views": "1",
    //     "amount": "2.00",
    //     "currency": "USD",
    //     "end": "2017-11-15 00:05:12",
    //     "active": "1",
    //     "viewed": "0",
    //     "total": "4.00"
    //   },
    //   {
    //     "id": "53",
    //     "name": "tenor",
    //     "url": "614573b6",
    //     "views": "1",
    //     "amount": "0.00",
    //     "currency": "",
    //     "end": "2017-11-15 00:11:31",
    //     "active": "1",
    //     "viewed": "0",
    //     "total": null
    //   }
    // ]
  }

  @action
  deleteItem(index) {
    /*
    const API_URL = process.env.REACT_APP_API_URL    
    axios.post(`${API_URL}/uploads/delete`, { mediaId: index })
      .catch(console.log)
    */
    //fetch action

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

  @action
  extendItem(index) {
    /*
    const API_URL = process.env.REACT_APP_API_URL    
    axios.post(`${API_URL}/uploads/extend`, { mediaId: index })
      .catch(console.log)
    */
    //fetch action
    this.all.replace([
      ...this.all.slice(0, index),
      {
        id: 243,
        file: 'How make makeup?',
        views: 170,
        seen: 50,
        active: 1,
        price: '2541.52',
        earn: '560.41',
        url: 'http://it.oz/asd231',
        end: '2017-12-12',
        date: '2017-12-10'
      },
      ...this.all.slice(index + 1)
    ])
  }

  @action
  setDateAction = (index, state) => {
    this.all.replace([
      ...this.all.slice(0, index),
      {
        ...this.all[index],
        actionDateToggle: state ? !this.all[index].copyActionToggle : state
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
}

export default new Uploads()
