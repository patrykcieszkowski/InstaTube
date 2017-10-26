import Home from './Home'
import Auth from './Auth'
import Remind from './Auth/Remind'
import Help from './Help'
import About from './About'

export default {
  Home,
  About,
  Auth: {
    Auth,
    Remind
  },
  Help
}
