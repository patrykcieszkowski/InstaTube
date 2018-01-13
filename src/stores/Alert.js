/* eslint-disable */
import { observable, computed, action } from 'mobx'

class Alert {
  @observable alert = null

  @action
  setAlert(data) {
    this.alert = data
  }

  @action
  onSuccessClick() {
    if (this.alert.success.onClick) {
      this.alert.success.onClick()
    }
    this.alert = null
  }

  @action
  onCancelClick() {
    if (this.alert.cancel.onClick) {
      this.alert.cancel.onClick()
    }
    this.alert = null
  }
}

export default new Alert()
