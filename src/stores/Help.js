/* eslint-disable */
import { observable, action } from 'mobx'

class Help {
  @observable all = []

  @action
  fetch() {
    /*
    const API_URL = process.env.REACT_APP_API_URL    
    axios.get(`${API_URL}/help`)
      .then((res) => {
      this.all = res
    })
      .catch(console.log)
    */
    //fetch action

    this.all = [
      {
        name: 'Upload file',
        body:
          'Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, <b>jak Aldus</b> PageMaker'
      },
      {
        name: 'Upload file',
        body:
          'Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, <b>jak Aldus</b> PageMaker'
      },
      {
        name: 'Upload file',
        body:
          'Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, <b>jak Aldus</b> PageMaker'
      },
      {
        name: 'Upload file',
        body:
          'Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, <b>jak Aldus</b> PageMaker'
      }
    ]
  }
}

export default new Help()
