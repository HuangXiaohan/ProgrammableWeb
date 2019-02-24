<template>
    <div id="recipedetail">
        <div class = "col-md-6 offset-md-3 no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative my-5">
            <h3 class="mt-4 mb-2">{{recipe_name}}</h3>
            <hr>
            <div class="row my-4">
                <h6 class="font-italic col-md-3">Ingredient 1</h6>
                <p class= "col-md-8 card-text mb-auto">{{ingredient1}}
                </p>
            </div>
            <div class="row my-4">
                <h6 class="font-italic col-md-3">Ingredient 2</h6>
                <p class= "col-md-8 card-text mb-auto">{{ingredient2}}</p>
            </div>
            <div class="row my-4">
                <h6 class="font-italic col-md-3">Ingredient 3</h6>
                <p class= "col-md-8 card-text mb-auto">{{ingredient3}}</p>
            </div>
            <div class="row my-4">
                <h6 class="font-italic col-md-3">Ingredient 4</h6>
                <p class= "col-md-8 card-text mb-auto">{{ingredient4}}</p>
            </div>
            <div class="row my-4">
                <h6 class="font-italic col-md-3">Description</h6>
                <p class= "col-md-8 card-text mb-auto">{{description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'recipedetail',
    data() {
        return {
            recipe_name:'',
            ingredient1:'',
            ingredient2:'',
            ingredient3:'',
            ingredient4:'',
            description:''
        }
    },
    mounted() {
        this.recipe_name = this.$route.query.recipe_name;
        this.ingredient1 = this.$route.query.ingredient1;
        this.ingredient2 = this.$route.query.ingredient2;
        this.ingredient3 = this.$route.query.ingredient3;
        this.ingredient4 = this.$route.query.ingredient4;
        this.description = this.$route.query.description;
    },
}
</script>