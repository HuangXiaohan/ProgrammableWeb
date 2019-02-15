<template>
    <div id="search">
    <div class="search_domain my-5">
      <div class="row">
        <div class="form-inline offset-md-4 col-md-5">
          <input class="form-control mr-sm-3 col-md-8" v-model="search_content" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-primary my-2 my-sm-0" type="button" v-on:click = "Search">Search</button>
        </div>
      </div>
      <div class="row">
        <div class="btn-group offset-md-4 my-3" style="padding-left:30px">
          <select class="btn btn-link"  v-model = "priseOrder">
            <option value="">Prix</option>
            <option value="0">bas - haut</option>
            <option value="1">haut - bas</option>
          </select>
        </div>
        <div class="btn-group col-md-1 my-3">
          <select class="btn btn-link" v-model = "calorieOrder">
            <option value="">Calorie</option>
            <option value="0">bas - haut</option>
            <option value="1">haut - bas</option>
          </select>
        </div>
        <div class="btn-group col-md-1 my-3">
          <select class="btn btn-link" v-model = "ingredientSelected">
            <option value="">Ingrédient</option>
          </select>
        </div>
      </div>

      <div class="list-domain container mr-sm-1 my-4">
        <div class="row">
          <div class="card col-md-3 mr-sm-4 my-3" style="width: 18rem;" v-for="(item,index) in products">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{products[index].product_name}}</h5>
              <p class="card-text">{{products[index].categories}}</p>
              <a href="#" class="btn btn-primary">Voir détail</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name : 'search',
    data() {
        return {
            priseOrder: '',
            calorieOrder: '',
            ingredientSelected: '',
            search_content: '',
            products:[],
        }
    },
    mounted() {
      /*this.$nextTick(function () {
          $.ajax({
            type: "GET",
            url:"http://10.212.99.194:3000/products",
            dataType:"json",
            success:function(data){
                this.products = data;
                console.log(this.products[0].product_name);
            },
            error:function(jqXHR){
              console.log("Error: "+jqXHR.status);
            }
          })
      })*/
      this.getDataInit();
    },
    methods: {
        Search: function(){
            if(this.priseOrder == '' && this.calorieOrder == '' && this.ingredientSelected == ''){
                
            }
        },
        getDataInit:function(){
          fetch('http://localhost:3000/products')
          .then(response=>{
            return response.json()
          })
          .then(data=>{
            this.products = data;
            console.log(this.products);
          })
          .catch(err=>{
            console.log("erreur dans le get: "+ err);
          })
        }
    }
    
      
}
</script>