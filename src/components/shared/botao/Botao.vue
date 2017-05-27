<template lang="html">
  <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo" name="button"> {{ rotulo }} </button>
</template>

<script>
  export default {
    props : {
      tipo: {
        required: true,
        type: String
      },

      rotulo: {
        required: true,
        type: String
      },

      confirmacao: Boolean,
      estilo: String
    },
    
    methods: {
      disparaAcao() {
        if( this.confirmacao ) {
          if( confirm( 'Confirma?' ) ) {
            this.$emit( 'botaoAtivado' );
          }
          return;
        }
        this.$emit( 'botaoAtivado' );
      }
    },

    computed: {
      estiloDoBotao() {
        if( this.estilo === 'padrao' || !this.estilo ) return 'botao-padrao';
        if( this.estilo === 'perigo' ) return 'botao-perigo';
      }
    }

  }
</script>

<style lang="css" scoped>
  .botao {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
  }

  .botao-perigo {
    background: firebrick;
    color: white;
  }

  .botao-padrao {
    background: darkcyan;
    color: white;
  }

</style>
