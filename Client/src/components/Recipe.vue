<template>
    <div id="recipe">
    <div class="search_domain my-5">
      <div class="row">
        <div class="form-inline offset-md-4 col-md-4">
          <input class="form-control mr-sm-3 col-md-9" v-model="search_content" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit" v-on:click = "Search">Search</button>
        </div>
        <div class="btn-group my-2">
          <select class="btn btn-link" v-model = "ingredientSelected">
            <option value="">Ingrédient</option>
          </select>
        </div>
        <div class="my-3 ml-3">
            <router-link to="/addRecipe" ><button type="button" class="btn btn-primary">Add Recipe</button></router-link>
        </div>
      </div>  

      <div class="list-domain container mr-sm-1 my-4">
        <div class="row">
          <div class="card col-md-3 mr-sm-4 my-3" style="width: 18rem;">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card col-md-3 mr-sm-4 my-3" style="width: 18rem;">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card col-md-3 mr-sm-4 my-3" style="width: 18rem;">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card col-md-3 mr-sm-4 my-3" style="width: 18rem;">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card col-md-3 mr-sm-4 my-3" style="width: 18rem;">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
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
    name : 'recipe',
    data() {
        return {
            ingredientSelected: '',
            search_content: ''
        }
    },
    methods: {
        Search: function(){
            if(this.ingredientSelected == ''){
                //axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
                //axios.get('http://10.212.123.25:3000/products')
                //.then(response => (console.log(response)))
            }
        }
    },
}
</script>