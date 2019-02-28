<template>
    <div id="modifierprice">
        <div class = "col-md-6 offset-md-3 no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative my-5">
            <h3 class="mt-4 mb-2">{{product.product_name}}</h3>
            <p class="mb-3 text-muted">Data mis à jour: {{product.price.date}}</p>
            <hr>
            <div class="row my-4" v-for="(value,key) in product.price" v-show="testValue(key)">
                <h6 class="font-italic col-md-3">{{key}} </h6>
                <input class= "col-md-8 form-control" v-bind:placeholder="value" v-model="price_modif[key]"></input>
            </div>
            
            <br>
            <div class="row my-4">
                <span v-on:click="submit" class="offset-md-5">
                    <router-link class="btn btn-primary" to='/productdetail'>Submit</router-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'modifierprice',
    data() {
        return {
            id:'',
            product:[],
            price_init:[],
            price_modif:[]
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
            this.price_init = product.price;
            this.price_modif = product.price;
            console.log(this.product);
          })
          .catch(err=>{
            console.log("erreur dans le get: "+ err);
          })
        },
        testValue:function(key){
            if(key == 'currency' || key == 'date')
                return false;
            else
                return true;
        },
        submit:function(){

            for(var i in this.price_init){
                if(this.price_modif[i] == undefined)
                    this.price_modif[i] = this.price_init[i];
            }

            console.log(this.price_modif);

            /*var opts = {Carrefour: this.price_modif['Carrefour'],
                        Casino: this.price_modif['Casino'],
                        Eleclerc: this.price_modif['Eleclerc'],
                        Learder_Price: this.price_modif['Learder_Price'],
                        Lidt: this.price_modif['Lidt'],
                        Monoprix: this.price_modif['Monoprix'],
                        Super_U: this.price_modif['Super_U']};

            console.log(opts);

            var jopts = JSON.stringify(opts);
            console.log(jopts);*/

            var opt = "/?Carrefour="+this.price_modif['Carrefour']+"&Casino="+this.price_modif['Casino']
                    +"&Eleclerc="+this.price_modif['Eleclerc']+"&Learder_Price="+this.price_modif['Learder_Price']
                    +"&Lidt="+this.price_modif['Lidt']+"&Monoprix="+this.price_modif['Monoprix']
                    +"&Super_U="+this.price_modif['Super_U'];

            fetch('http://localhost:3000/products/'+this.id+opt, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                //body: jopts,
                }).then(response => {
                    return response.json();
                }).then(data => {
                    //console.log(data);
                    window.alert("Success!");
                    this.$router.push({path:'/productdetail',query:{id:this.id}})
                    this.$router.go(0);
                }).catch(err => {
                    console.log(err);
                    window.alert("Fail of adding recipe");
                });
        }
    },
    
}
</script>