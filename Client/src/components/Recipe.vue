<template>
    <div id="recipe">
    <div class="my-5">
      <div class="row">
        <div class="form-inline offset-md-4 col-md-5">
          <input class="form-control mr-sm-3 col-md-8" v-model="search_content" type="search" placeholder="Search recipe" aria-label="Search">
          <button class="btn btn-outline-primary my-2 my-sm-0" type="button" v-on:click = "Search">Search</button>
        </div>
      </div>  

      <div class="list-domain container mr-sm-1 my-4">
        <div class="row">
          <div class="card col-md-3 mr-sm-4 my-3" style="width: 18rem;" v-for="(item,index) in recipes">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{item.recipe_name}}</h5>
              <p class="card-text">{{item.description}}</p>
              <a v-on:click="PresentDetail(item)">
                <router-link class="btn btn-primary" to="/recipedetail">Voir détail</router-link>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
    name : 'recipe',
    data() {
        return {
            search_content: '',
            recipes:'',
        }
    },
    methods: {
        Search: function(){
            if(this.search_content != ''){
               fetch('http://localhost:3000/recipe/showr?search='+this.search_content)
               .then(response=>{
                 return response.json()
               })
               .then(data=>{
                 this.recipes = data.recipes;
                 //console.log(this.recipes);
               })
            }
        },
        getDataInit:function(){
            fetch('http://localhost:3000/recipe/showr')
            .then(response=>{
              return response.json()
            })
            .then(data=>{
              this.recipes = data.recipes;
              console.log(this.recipes);
            })
            .catch(err=>{
              console.log("erreur dans le get: "+ err);
            })
        },
        PresentDetail:function(item){
            this.$router.push({path:'/recipedetail',query:{recipe_name:item.recipe_name,ingredient1:item.ingredient1,
            ingredient2:item.ingredient2, ingredient3:item.ingredient3, ingredient4 : item.ingredient4, description: item.description}});
            this.$router.go(0);
        }
    },
    mounted() {
        this.getDataInit();
    },
}
</script>