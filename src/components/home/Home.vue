<template>
  <div id="app" class="">
    <h1 class="title"> {{ title }} </h1>

    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre pelo título">
    <ul class="lista-fotos">

      <li v-for="foto in fotos" class="lista-fotos-item">

        <painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-transform:scale.animate="1.2"></imagem-responsiva>
          <botao tipo="button" rotulo="REMOVER" @botaoAtivado="remove( foto )" :confirmacao="false" estilo="perigo"></botao>
        </painel>

      </li>

    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import Botao from '../shared/botao/Botao.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Transform from '../../directives/Transform';
import FotoService from '../../domain/foto/FotoService';


export default {

  components: {
    'painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'botao': Botao
  },

  directives: {
    'transform': Transform
  },

  data() {
    return {
      title: 'Pictures',
      fotos: [],
      filtro: '',
      mensagem: ''
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

  methods: {

    remove( foto ) {

      this.service.delete( foto._id )
        .then( () => {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice( indice, 1 );
          this.mensagem = "Foto removida com sucesso"
        }, err => {
          this.mensagem = "Não foi possível remover a foto :( !";
          console.log(err)
        });
    }
  },

  created() {

    this.service = new FotoService( this.$resource );

    this.service
      .lista()
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

  .center {
    text-align: center;
  }

</style>
