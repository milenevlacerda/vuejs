<template>
  <div id="app" class="corpo">

    <meu-menu :rotas="routes"></meu-menu>

    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import { routes } from './routes';
  import Menu from './components/shared/menu/Menu.vue';

  export default {
    components: {
      'meu-menu': Menu
    },

    data() {
      return {
        routes: routes
        // routes
      }
    }
  }
</script>

<style lang="scss" scoped>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .pagina-enter,
  .pagina-leave-active {
    opacity: 0;
  }
  .pagina-enter-active,
  .pagina-leave-active {
    transition: opacity .4s;
  }

</style>
