import { AppState } from '../AppState.js'
import Pop from '../utils/Pop'
import { SocketHandler } from '../utils/SocketHandler'

class SocketService extends SocketHandler {
  constructor () {
    super()
    this
      .on('error', this.onError)
      .on('IS_TESTED', this.runTest)
      .on('LIGHT_TOGGLED', this.updateLightState)
      .on('HERES_THE_LIGHT_BABY', this.updateLightState)
  }

  onError(e) {
    Pop.toast(e.message, 'error')
  }

  runTest(payload) {
    Pop.toast(payload)
  }

  updateLightState(payload) {
    AppState.lightState = payload
  }
}

export const socketService = new SocketService()
