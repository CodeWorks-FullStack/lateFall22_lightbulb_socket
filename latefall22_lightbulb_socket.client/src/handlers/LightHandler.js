import { socketService } from "../services/SocketService.js"

class LightHandler {
  toggleLight() {
    socketService.emit('LIGHT_TOGGLE')
  }

  getLightState() {
    socketService.emit('CHECK_LIGHT')
  }
}

export const lightHandler = new LightHandler()