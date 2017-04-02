<template lang="html">
  <nav>
    <ul>
      <li v-for="route in routes">
        <router-link :to="rota.path ? rota.path : '/'">{{ rota.titulo }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    // props: [ 'routes' ]

    // validando props
    props: {
        rotas: {
            type: Array,
            required: true
        }
    }
  }
</script>

<style lang="css" scoped>
</style>
