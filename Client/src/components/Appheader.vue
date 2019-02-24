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
            <a class="nav-link">Home</a>
          </li>
          <li class="nav-item" v-bind:class="{active: isRecipe}" v-on:click="goRecipe">
            <router-link class="nav-link" to="/recipe" >Recipe</router-link>
          </li>
          <li class="nav-item" v-bind:class="{active: isAddRecipe}" v-on:click="goAddRecipe">
            <a class="nav-link">Add Recipe</a>
          </li>
        </ul>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <h5 v-on:click="goProfile">
            <router-link to="/profile" class="font-italic" style="color:white">{{username}}</router-link>
        </h5>
        <span v-on:click="disableSearch" v-show="!isLogin">
          <router-link to="/signin" class="btn btn-light btn-sm">Sign in</router-link>
        </span>
        <span v-on:click="disableSearch" v-show="!isLogin">
          <router-link to="/signup" class="btn btn-light btn-sm ml-2">Sign up</router-link>
        </span>
        
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
        isAddRecipe:false,
        isLogin:false,
        token:'',
        username:'',
        email:''
      }
    },
    methods: {
      showSearch:function(){
        this.isSearch = true;
        this.isRecipe = false;
        this.isAddRecipe = false;
        if(this.token != "")
          this.$router.push({path:'/',query:{token:this.token}});
        else
          this.$router.push('/');
      },
      goRecipe:function(){
        if(this.token != "")
          this.$router.push({path:'/recipe',query:{token:this.token}});
        this.isSearch = false;
        this.isRecipe = true;
        this.isAddRecipe = false;
      },
      goAddRecipe:function(){
        if(this.token == ""){
            window.alert("Please signin!");
            this.$router.push('/');
        }
        else{
            this.$router.push({path:'/addrecipe',query:{token:this.token}});
            this.isSearch = false;
            this.isRecipe = false;
            this.isAddRecipe = true;
        }
        
          
      },
      disableSearch:function(){
        this.isSearch = false;
      },
      selectProfile:function(){
          fetch('http://localhost:3000/user/profile?secret_token='+this.token)
          .then(response=>{
            return response.json()
          })
          .then(data=>{
            this.email = data.user.email;
            this.username = this.email.split('@')[0];
          })
          .catch(err=>{
            console.log("erreur dans le get: "+ err);
          })
      },
      goProfile:function(){
          this.isSearch = false;
          this.$router.push({path:'/profile',query:{token:this.token,email:this.email}});
          //console.log(id);
          this.$router.go(0);
          
      }

    },
    components:{
      'v-search': Search
    },
    mounted() {
      var path = this.$route.path;
      var len = Object.keys(this.$route.query).length;
      var para = this.$route.query;
      console.log(para.hasOwnProperty('token'))
      if(para.hasOwnProperty('token')){
          this.isLogin = true;
          this.token = this.$route.query.token;
          this.selectProfile();
        
      }
      
      if(path == "/")
        this.isSearch = true;
      else
        this.isSearch =false;
      
      if(path == "/recipe")
        this.isRecipe = true;
      if(path == "/addRecipe")
        this.isAddRecipe = true;

    },

}
</script>
