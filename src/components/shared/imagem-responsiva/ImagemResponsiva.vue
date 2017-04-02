<template lang="html">
  <img class="imagem-responsiva" :src="url" :alt="titulo">
</template>

<script>
export default {
  props:[ 'url', 'titulo' ]
}
</script>

<style lang="css" scoped>
  .imagem-responsiva {
    width: 100%;
  }
</style>
