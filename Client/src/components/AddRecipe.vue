<template>
    <div id= "addrecipe">
        <div class="my-5">
            <div class="row">
                <div class="form-group offset-md-4 col-md-4">
                    <label class="font-italic">Nom de recette</label>
                    <input class="form-control" placeholder="Nom de recette" v-model="recipe_name">
                </div>
            </div>
            <div class="row">
                <div class="form-group offset-md-4 col-md-4">
                    <label class="font-italic">Ingrédient 1</label>
                    <input class="form-control" placeholder="Ingrédient 1" v-model="ingredient1">
                </div>
            </div>
            <div class="row">
                <div class="form-group offset-md-4 col-md-4">
                    <label class="font-italic">Ingrédient 2</label>
                    <input class="form-control" placeholder="Ingrédient 2" v-model="ingredient2">
                </div>
            </div>
            <div class="row">
                <div class="form-group offset-md-4 col-md-4">
                    <label class="font-italic">Ingrédient 3</label>
                    <input class="form-control" placeholder="Ingrédient 3" v-model="ingredient3">
                </div>
            </div>
            <div class="row">
                <div class="form-group offset-md-4 col-md-4">
                    <label class="font-italic">Ingrédient 4</label>
                    <input class="form-control" placeholder="Ingrédient 4" v-model="ingredient4">
                </div>
            </div>
            <div class="row">
                <div class="form-group offset-md-4 col-md-4">
                    <label class="font-italic">Description</label>
                    <textarea class="form-control" placeholder="Description" rows="4" v-model="description"></textarea>
                </div>
            </div>
            <p class="offset-md-5" style="color:red;font-size:13px" v-show="hasError">{{errorText}}</p>
            <br>
            <div class="row offset-md-5">
                <button class="btn btn-outline-primary offset-md-1" type="button" v-on:click = "Submit">Submit</button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:'addrecipe',
    data() {
        return {
            ingredient1:'',
            ingredient2:'',
            ingredient3:'',
            ingredient4:'',
            recipe_name:'',
            description:'',
            hasError:false,
            errorText:'',
        }
    },
    methods: {
        Submit:function(){
            var opts = {ingredient1: this.ingredient1,
                        name: this.recipe_name,         
                        ingredient2: this.ingredient2,
                        ingredient3: this.ingredient3,
                        ingredient4: this.ingredient4,
                        description: this.description
                        };

            var jopts = JSON.stringify(opts);

            if(this.recipe_name == ''){
                this.hasError = true;
                this.errorText = 'Veuillez remplir le nom de recette';
            }else if(this.ingredient1 == '' && this.ingredient2 == '' && this.ingredient3 == '' && this.ingredient4 == ''){
                this.hasError = true;
                this.errorText = 'Veuillez remplir au moins de un ingredient';
            }else if(this.description == ''){
                this.hasError = true;
                this.errorText = 'Veuillez remplir la description de recette';
            }else{
                fetch('http://localhost:3000/recipe/affRecette', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: jopts,
                }).then(response => {
                    return response.json();
                }).then(data => {
                    console.log(data);
                    window.alert("Success!");
                }).catch(err => {
                    console.log(err);
                    window.alert("Fail of adding recipe");
                });
            }
            
        }
    },

}
</script>