import mobx from 'mobx'
import store from 'store'

/*
  Will listen to the Auth store and automatically
  save it's state onto the browser's localStorage
*/

const autoStore = function(key, _this) {
  let initialRun = true

  // will run on change
  mobx.autorun(() => {
    // on load check if there's an existing store on localStorage and extend the store
    if (initialRun) {
      const existingStore = store.get(key)

      if (existingStore) {
        mobx.extendObservable(_this, existingStore)
      }
    }

    const { response, ..._nThis } = _this
    // from then on serialize and save to localStorage
    store.set(key, mobx.toJS(_nThis))
  })

  initialRun = false
}

export default autoStore
