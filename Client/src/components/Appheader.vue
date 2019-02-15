<template>
<div id="appheader">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">FOOD FACTS</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item"  v-bind:class="{active: isSearch}" v-on:click= "showSearch">
            <a class="nav-link"  href="#">Home</a>
          </li>
          <li class="nav-item" v-bind:class="{active: isRecipe}" v-on:click="goRecipe">
            <router-link class="nav-link" to="/recipe" >Recipe</router-link>
          </li>
          <li class="nav-item" v-bind:class="{active: isAddRecipe}" v-on:click="goAddRecipe">
            <router-link class="nav-link" to="/addRecipe" >Add Recipe</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
    <v-search v-show = "isSearch"></v-search>
    <router-view></router-view>
</div>
</template>

<script>
import Search from './Search.vue'

export default {
    name: 'appheader',
    data() {
      return {
        isSearch:false,
        isRecipe:false,
        isAddRecipe:false
      }
    },
    methods: {
      showSearch:function(){
        this.isSearch = true;
        this.isRecipe = false;
        this.isAddRecipe = false;
        this.$router.push('/');
      },
      goRecipe:function(){
        this.isSearch = false;
        this.isRecipe = true;
        this.isAddRecipe = false;
      },
      goAddRecipe:function(){
        this.isSearch = false;
        this.isRecipe = false;
        this.isAddRecipe = true;
      }

    },
    components:{
      'v-search': Search
    },
    mounted() {
      var path = this.$route.path;
      if(path == "/")
        this.isSearch = true;
      if(path == "/recipe")
        this.isRecipe = true;
      if(path == "/addRecipe")
        this.isAddRecipe = true;
    },

}
</script>
