<template>
  <div id="app" class="corpo">
    <h1 class="title"> {{ title }} </h1>
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre pelo título">
    <ul class="lista-fotos">

      <li v-for="foto in fotosComFiltro" class="lista-fotos-item">

        <painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.title">
        </painel>

      </li>

    </ul>
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';

export default {
  components: {
    'painel': Painel
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
    // this -> acessa o componente
    // $http -> utiliza o VueResource
    // $http utiliza promises
    let promise = this.$http.get( 'http://localhost:3000/v1/fotos' );
    promise.then( res => res.json())
    .then( fotos => this.fotos = fotos, err => console.log( err ) );
  }
}
</script>

<style lang="scss" scoped>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .title {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos-item {
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%;
  }

  .filtro {
    width: 100%;
  }
</style>
