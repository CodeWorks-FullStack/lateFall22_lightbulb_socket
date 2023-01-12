<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 bg-white rounded elevation-3">
      <button class="btn" @click="toggleLight">
        <i class="mdi mdi-lightbulb fs-1" :class="{ 'text-warning': lightState }"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { socketService } from '../services/SocketService.js';
import { lightHandler } from '../handlers/LightHandler.js'
import { AppState } from '../AppState.js';
export default {
  setup() {
    onMounted(() => {
      socketService.emit('SOCKET_TEST', 'Is the socket working?')
      lightHandler.getLightState()
    })
    return {
      lightState: computed(() => AppState.lightState),
      toggleLight() {
        lightHandler.toggleLight()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
