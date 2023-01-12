import { SocketHandler } from '../utils/SocketHandler'

let lightState = false

export class LightHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor (io, socket) {
    super(io, socket)
    this
      .on('LIGHT_TOGGLE', this.toggleLight)
      .on('CHECK_LIGHT', this.checkLight)

  }
  checkLight() {
    this.socket.emit('HERES_THE_LIGHT_BABY', lightState)
  }
  toggleLight() {
    lightState = !lightState
    this.io.emit('LIGHT_TOGGLED', lightState)
  }

}
