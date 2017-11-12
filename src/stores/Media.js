/* eslint-disable */
import { observable, action } from 'mobx'

class Media {
  @observable media = {}

  @action
  fetch(mediaId) {
    /*
    const API_URL = process.env.REACT_APP_API_URL    
    axios.get(`${API_URL}/media`, { mediaId })
      .then((res) => {
      this.all = res
    })
      .catch(console.log)
    */
    // fetch action
    this.media = {
      active: true,
      type: 'audio',
      name: 'My upload file',
      message:
        'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker',
      end: '2017-10-27 10:00:23',
      views: '50',
      display: '30',
      ppv: false,
      ppi: false,
      vp: {
        h: '15',
        m: '10'
      },
      src:
        'http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg'
      // https://www.w3schools.com/tags/movie.mp4
      // https://twistedsifter.files.wordpress.com/2017/03/point-reyes-shipwreck.jpg
    }
  }
}

export default new Media()
