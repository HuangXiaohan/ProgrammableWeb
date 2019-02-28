<template>
    <div id="productdetail">
        <div class = "col-md-6 offset-md-3 no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative my-5">
            <h3 class="mt-4 mb-2">{{product.product_name}}</h3>
            <p class="mb-3 text-muted">{{product.entry_dates_tags[0]}}</p>
            <hr>
            <div class="row my-4">
                <h6 class="font-italic col-md-3">Prix:</h6>
                <p class= "col-md-8 card-text mb-auto">
                    <span v-for="(key,value) in product.price" v-show="testValue(value)">{{value}} : {{key}}<br></span>
                </p>
            </div>
            <div class="row my-4">
                <h6 class="font-italic col-md-3">Date update</h6>
                <p class= "col-md-8 card-text mb-auto">
                    {{product.price.date}}
                </p>
            </div>
            <div class="row my-4">
                <h6 class="font-italic col-md-3">Catagorie</h6>
                <p class= "col-md-8 card-text mb-auto">{{product.categories}}
                </p>
            </div>
            <div class="row my-4">
                <h6 class="font-italic col-md-3">Ingredients Text</h6>
                <p class= "col-md-8 card-text mb-auto">{{product.ingredients_text[0]}}<hr></p>
            </div>
            <div class="row my-4">
                <h6 class="font-italic col-md-3">Ingredients</h6>
                <p class= "col-md-8 card-text mb-auto">
                    <span v-for="item in product.ingredients">
                        <span v-for="(key,value) in item">{{value}} : {{key}}<br></span>
                        <hr>
                    </span>
                </p>
            </div>
            <div class="row my-4">
                <h6 class="font-italic col-md-3">Nutriments</h6>
                <p class= "col-md-8 card-text mb-auto">
                    <span v-for="(key,value) in product.nutriments[0]">
                        <span v-if="testValue(value)">{{value}} : {{key}}<br></span>
                    </span>
                    <hr>
                </p>
            </div>
            <div class="row my-4">
                <h6 class="font-italic col-md-3">Brand</h6>
                <p class= "col-md-8 card-text mb-auto">{{product.brands}}<hr></p>
            </div>
            <div class="row my-4">
                <h6 class="font-italic col-md-3">Labels</h6>
                <p class= "col-md-8 card-text mb-auto">{{product.labels}}</p>
            </div>
            <br>
            <div class="row my-4">
                <span v-on:click="goModifier" class="offset-md-5">
                    <router-link class="btn btn-primary" to='/modifierprice'>Modifier Prix</router-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'productdetail',
    data() {
        return {
            id:'',
            product:[]
        }
    },
    mounted() {
        this.id = this.$route.query.id;
        console.log(this.id);
        this.getDataInit();
    },
    methods: {
        getDataInit:function(){
          fetch('http://localhost:3000/products/'+this.id)
          .then(response=>{
            return response.json()
          })
          .then(data=>{
            this.product = data.product;
            console.log(this.product);
          })
          .catch(err=>{
            console.log("erreur dans le get: "+ err);
          })
        },
        testValue:function(value){
            if(value == 'currency' || value == 'date')
                return false;
            else
                return true;
        },
        goModifier:function(){
            this.$router.push({path:'/modifierprice',query:{id:this.id}});
            this.$router.go(0);
        }
    },
    
}
</script>