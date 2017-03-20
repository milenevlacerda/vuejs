<template>
  <div id="app">
    <h1> {{ title }} </h1>
    <ul>
      <li v-for="picture in pictures">
        <img v-bind:src="picture.url" v-bind:alt="picture.title">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Pictures'
      pictures: [
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZxJZkHv2sGQRxue11kOAzGHRDkByt9Yu0mREYpNrxxm8laEZuQEdPWc',
          title: 'dog'
        },
        {
          url: 'http://www.ultracurioso.com.br/wp-content/uploads/2015/08/Cat.jpg',
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
