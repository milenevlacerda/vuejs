import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

export const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
    titulo: 'Home',
    menu: true
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro,
    titulo: 'Cadastro',
    menu: true
  },
  {
    path: '*',
    component: Home,
    menu: false
  }
];
