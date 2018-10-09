<template>
  <div id="app">
    <img v-page-guide="'testing'" alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="showGuide = true">Hello Show Guide</button>
    <v-page-guide v-model="showGuide">
      <!-- <template slot="content" slot-scope="item">
        <p>{{ item.content.text }}</p>
      </template> -->
    </v-page-guide>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      showGuide: false,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
