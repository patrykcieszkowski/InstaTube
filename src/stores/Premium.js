/* eslint-disable */
import { observable } from 'mobx'

class Premium {
  @observable all = [
    {
      "status" : "Complete",
      "date" : "2017-12-10",
      "active" : 1,
      "total" : "180"
    },
    {
      "status" : "End",
      "date" : "2017-12-09",
      "active" : 1,
      "total" : "180"
    },
    {
      "status" : "Complete",
      "date" : "2017-12-10",
      "active" : 1,
      "total" : "180"      
    }
  ]  
}

export default new Premium()