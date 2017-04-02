<template>
  <div id="app" class="">
    <h1 class="title"> {{ title }} </h1>
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre pelo título">
    <ul class="lista-fotos">

      <li v-for="foto in fotos" class="lista-fotos-item">

        <painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo"></imagem-responsiva>
        </painel>

      </li>

    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';

export default {
  components: {
    'painel': Painel,
    'imagem-responsiva': ImagemResponsiva
  },

  data() {
    return {
      title: 'Pictures',
      fotos: [],
      filtro: []
    }
  },

  computed: {
    fotosComFiltro() {
      if( this.filtro ) {
        let exp = new RegExp( this.filtro.trim(), 'i' );
        return this.fotos.filter( foto => exp.test( foto.titulo ) );
      }else {
        return this.fotos;
      }
    }
  },

  created() {
    this.$http
      .get( 'http://localhost:3000/v1/fotos' )
      .then( res => res.json() )
      .then( fotos => this.fotos = fotos, err => console.log( err ) );
  }
}
</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    width: 100%;
  }
</style>
