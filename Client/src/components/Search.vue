<template>
  <div id="search">
    <div class="my-5" v-show="showList">
      <div class="row">
        <div class="form-inline offset-md-4 col-md-5">
          <input class="form-control mr-sm-3 col-md-8" v-model="search_content" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-primary my-2 my-sm-0" type="button" v-on:click = "Search">Search</button>
        </div>
      </div>
      <div class="row">
        <div class="btn-group offset-md-4 my-3" style="padding-left:30px">
          <select class="btn btn-link ml-3"  v-model = "priseOrder" v-on:change="sortByPrice(priseOrder)"> 
            <option value="">Prix</option>
            <option value="0" >bas - haut</option>
            <option value="1" >haut - bas</option>
          </select>
        </div>
        <!-- <div class="btn-group col-md-1 my-3">
          <select class="btn btn-link" v-model = "calorieOrder">
            <option value="">Calorie</option>
            <option value="0">bas - haut</option>
            <option value="1">haut - bas</option>
          </select>
        </div> -->
        <div class="btn-group col-md-1 my-3">
          <select class="btn btn-link ml-5" v-model = "scoreOrder" v-on:change="sortByScore(scoreOrder)">
            <option value="">Score</option>
            <option value="1">haut - bas</option>
            <option value="0">bas - haut</option>
          </select>
        </div>
      </div>

      <div class="list-domain container mr-sm-1 my-4">
        <div class="row">
          <!-- <div class="card col-md-3 mr-sm-4 my-3" style="width: 18rem;" v-for="(item,index) in products"> -->
          <div class="card col-md-3 mr-sm-4 my-3" style="width: 18rem;" v-for="(item,index) in products">
            <div class="card-body">
              <h5 class="card-title">{{item.product_name}}</h5>
              <p class="card-text">{{item.categories}}</p>
              <p class="card-text">Score: {{item.score}}</p>
              <p class="card-text">Prix: {{item.price.Carrefour}}</p>
              <!-- <p class="card-text">Calorie / 100g: </p> -->
              <a v-on:click="PresentDetail(item.id)">
                <router-link class="btn btn-primary" to="/productdetail">Voir détail</router-link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import ProductDetail from "./ProductDetail.vue"

export default {
    name : 'search',
    data() {
        return {
            priseOrder: '',
            calorieOrder: '',
            scoreOrder: '',
            search_content: '',
            products:[],
            showList:true,
        }
    },
    components:{
      'product-detail': ProductDetail,
    },
    mounted() {
      this.getDataInit();
    },
    methods: {
        Search: function(){
            
            if(this.search_content != ''){
               fetch('http://localhost:3000/products/showp?search='+this.search_content)
               .then(response=>{
                 return response.json()
               })
               .then(data=>{
                 this.products = data.products;
                 console.log(data);
               })
            }
        },
        PresentDetail:function(id){
          this.$router.push({path:'/productdetail',query:{id:id}});
          //console.log(id);
          this.$router.go(0);
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
        },
        sortByPrice:function(order){
            this.products = this.products.sort(function(a,b){
              var x=a['price']['Carrefour'];
              var y=b['price']['Carrefour'];
              if(order == 0)
                return ((x<y)?-1:((x>y)?1:0));
              if(order == 1)
                return ((x>y)?-1:((x<y)?1:0));
            });
        },
        sortByScore:function(order){
            this.products = this.products.sort(function(a,b){
              var x=a['score'];
              var y=b['score'];
              var z="Not enough information";
              if(order == 1)
                return ((x<y)?-1:((x>y)?1:0));
              if(order == 0){
                if(x == z || y ==z)
                  return ((x<y)?-1:((x>y)?1:0));
                else
                  return ((x>y)?-1:((x<y)?1:0));
              }
                
            });
        }

    }
    
      
}
</script>