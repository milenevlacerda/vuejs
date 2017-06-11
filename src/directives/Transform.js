import Vue from 'vue';

export default {

    bind( el, binding, vnode ) {
        
        let current = 0;
        el.addEventListener('dblclick', function(){
            let increment = binding.value || 90;
            let efeito;

            if( !binding.arg || binding.arg == 'rotate' ) {
                if( binding.modifiers.reverse ) {
                    current-=increment;
                } else {
                    current+=increment;
                }
                efeito = `rotate(${current}deg)`
            }else if( binding.arg == 'scale' ){
                efeito = `scale(${increment})`
            }
            
            el.style.transform = efeito;

            if( binding.modifiers.animate ) {
                this.style.transition = 'transform 0.5s';
            }
            
        });
    }
};

// Para usar diretivas no html usa-se o v-transform
// bind( el, buinding, vnode ) -> el: referencia do elemento do dom que a diretiva está sendo associada.