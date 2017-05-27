import Vue from 'vue';

Vue.directive( 'transform', {
    bind( el, binding, vnode ) {

        let current = 0;
        el.addEventListener('dblclick', function(){
            current+=90;
            el.style.transform = `rotate(${current}deg)`;
        });
    }
});

// Para usar diretivas no html usa-se o v-transform
// bind( el, buinding, vnode ) -> el: referencia do elemento do dom que a diretiva está sendo associada.