/* eslint-disable */
import { observable, action } from 'mobx'

class Premium {
  @observable all = []

  @action
  fetch() {
    /*
    const API_URL = process.env.REACT_APP_API_URL    
    axios.get(`${API_URL}/premium`)
      .then((res) => {
      this.all = res
    })
      .catch(console.log)
    */
    //fetch action
    this.all = [
      {
        status: 'Complete',
        date: '2017-12-10',
        active: 1,
        total: '180'
      },
      {
        status: 'End',
        date: '2017-12-09',
        active: 1,
        total: '180'
      },
      {
        status: 'Complete',
        date: '2017-12-10',
        active: 1,
        total: '180'
      }
    ]
  }
}

export default new Premium()
