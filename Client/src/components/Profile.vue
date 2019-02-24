<template>
    <div id="profile">
        <div class = "col-md-6 offset-md-3 no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative my-5">
            <h3 class="mt-4 mb-2">Profile</h3>
            <div class="row my-4">
                <h6 class="font-italic col-md-3">Email</h6>
                <p class= "col-md-8 card-text mb-auto">{{email}}
                </p>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    name:'profile',
    data() {
        return {
            email:'',
        }
    },
    mounted() {
        this.email = this.$route.query.email;
    },
}
</script>

