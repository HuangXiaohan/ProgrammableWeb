import Vue from 'vue';
import App from './App.vue';
import User from './components/User.vue';
import Search from './components/Search.vue';
import VueRouter from 'vue-router';
import Header from './components/Appheader.vue';
import Recipe from './components/Recipe.vue';
import AddRecipe from './components/AddRecipe.vue';
import ProductDetail from './components/ProductDetail.vue';
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';
import Profile from './components/Profile.vue';
import RecipeDetail from './components/RecipeDetail.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
          path:'/recipe',
          name:'recipe',
          component: Recipe,
        },
        {
          path:'/addRecipe',
          name:'addrecipe',
          component: AddRecipe,
        },
        {
          path: '/productdetail',
          name:'productdetail',
          component: ProductDetail,
        },
        {
          path: '/signin',
          name:'signin',
          component: Signin,
        },
        {
          path: '/signup',
          name:'signup',
          component: Signup,
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile,
        },
        {
          path:'/recipedetail',
          name:'recipedetail',
          component: RecipeDetail,
        }
    ],
    mode:'history'
})


new Vue({
  el: '#appheader',
  router: router,
  prototype: {
    token:'',
  },
  render: h => h(Header)
})