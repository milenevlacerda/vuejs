<template>
  <div id="app">
    <h1> {{ title }} </h1>
    <ul>
      <li v-for="foto in fotos">
        <img :src="foto.url" :alt="foto.title">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Pictures',
      fotos: [
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZxJZkHv2sGQRxue11kOAzGHRDkByt9Yu0mREYpNrxxm8laEZuQEdPWc',
          title: 'dog'
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZxJZkHv2sGQRxue11kOAzGHRDkByt9Yu0mREYpNrxxm8laEZuQEdPWc',
          title: 'cat'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
