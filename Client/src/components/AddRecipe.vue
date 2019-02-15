<template>
    <div id= "addrecipe">
        <div class="search_domain my-5">
            <div class="row">
                <div class="form-group offset-md-4 col-md-5">
                    <label>Nom de recette</label>
                    <input class="form-control" placeholder="Nom de recette" v-model="recipe_name">
                </div>
            </div>
            <div class="row">
                <div class="form-group offset-md-4 col-md-5">
                    <label>Ingrédient 1</label>
                    <input class="form-control" placeholder="Ingrédient 1" v-model="ingredient[0]">
                </div>
            </div>
            <div class="row">
                <div class="form-group offset-md-4 col-md-5">
                    <label>Ingrédient 2</label>
                    <input class="form-control" placeholder="Ingrédient 2" v-model="ingredient[1]">
                </div>
            </div>
            <div class="row">
                <div class="form-group offset-md-4 col-md-5">
                    <label>Ingrédient 3</label>
                    <input class="form-control" placeholder="Ingrédient 3" v-model="ingredient[2]">
                </div>
            </div>
            <div class="row">
                <div class="form-group offset-md-4 col-md-5">
                    <label>Ingrédient 4</label>
                    <input class="form-control" placeholder="Ingrédient 4" v-model="ingredient[3]">
                </div>
            </div>
            <div class="row">
                <div class="form-group offset-md-4 col-md-5">
                    <label>Ingrédient 5</label>
                    <input class="form-control" placeholder="Ingrédient 5" v-model="ingredient[4]">
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:'addrecipe',
    data() {
        return {
            ingredient:['','','','',''],
            recipe_name:'',
        }
    },

}
</script>