<template>
    <div id="signin">
        <div class="col-md-4 offset-md-4 my-5">
            <div class = "form-signin text-center col-md-10 offset-md-1">
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <input type="email" id="inputEmail" v-model="myemail" class="form-control" placeholder="Email address" required autofocus>
                <input type="password" id="inputPassword" v-model="mypassword" class="form-control" placeholder="Password" required>
                <p style="color:red;font-size:13px" v-show="isError">{{errortext}}</p>
                <br>
                <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="signin">Sign in</button>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name:'signin',
    data() {
        return {
            myemail:'',
            mypassword:'',
            opt:'',
            errortext:'',
            isError: false,
        }
    },
    methods: {
        signin:function(){
            if(this.myemail == '' || this.mypassword == ''){
                this.isError = true;
                this.errortext = 'Veuillez remplir votre email / mot de passe';
            }
            else{
                this.isError = false;
                this.opt = 'email='+this.myemail+'&password='+this.mypassword;
                fetch('http://localhost:3000/login?'+this.opt, {
                    method: 'post',
                }).then(response => {
                    return response.json();
                }).then(data => {
                    //console.log(data);
                    var error = function(d){
                        var hasError = false;
                        for(var key in data){
                            if(key == 'error'){
                                hasError = true;
                                break;
                            }
                        }
                        return hasError;
                    };
                    if(error(data)){
                        this.isError = true;
                        this.errortext = 'email / mot de passe incorrect';
                    }else{
                        this.$router.push({path:'/',query:{token:data.token}});
                        this.$router.go(0);
                    }
                }).catch(err => {
                    console.log(err);
                });
            }
        },
        
    },
}
</script>