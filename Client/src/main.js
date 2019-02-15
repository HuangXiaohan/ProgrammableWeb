import Vue from 'vue';
import App from './App.vue';
import User from './components/User.vue';
import Search from './components/Search.vue';
import VueRouter from 'vue-router';
import Header from './components/Appheader.vue';
import Recipe from './components/Recipe.vue';
import AddRecipe from './components/AddRecipe.vue';
import $ from 'jquery'

/*new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#user',
  render:h =>h(User)
})*/

/*new Vue({
  el: '#search',
  render: h => h(Search)
})*/


Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/search',
            name: 'search',
            component:Search,
            
        },
        {
          path:'/recipe',
          name:'recipe',
          component: Recipe,
          childrer: [
            
          ]
        },
        {
          path:'/addRecipe',
          name:'addrecipe',
          component: AddRecipe,
        }
    ],
    mode:'history'
})

new Vue({
  el: '#appheader',
  router: router,
  render: h => h(Header)
})