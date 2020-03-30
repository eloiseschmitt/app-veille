import Vue from 'vue'
import Router from 'vue-router'
import Accueil from './components/accueil/Accueil.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'accueil',
        component: Accueil
      }
  
    ],
    /*beforeEach(to, from, next) {
        next() // DO IT!
    },
    scrollBehavior (to, from, savedPosition) {
  
      return { x: 0, y: 0 }
    }*/
  })