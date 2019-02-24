<template>
    <div id="signup">
        <div class="col-md-4 offset-md-4 my-5">
            <div class = "form-signin text-center col-md-10 offset-md-1">
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <input type="email" id="inputEmail" v-model="myemail" class="form-control" placeholder="Email address" required autofocus>
                <br>
                <input type="password" id="inputPassword" v-model="mypassword" class="form-control" placeholder="Password" required>
                <br>
                <input type="password" id="verifierPassword" v-model="testpassword" class="form-control" placeholder="Confirm password" required>
                <p style="color:red;font-size:13px" v-show="hasError">{{errorText}}</p>
                <br>
                <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="signup">Sign up</button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name:'signup',
    data() {
        return {
            myemail:'',
            mypassword:'',
            testpassword:'',
            opt:'',
            hasError: false,
            errorText:'',
        }
    },
    methods: {
        signup:function(){
            if(this.myemail == '' || this.mypassword == '' || this.testpassword == ''){
                this.hasError = true;
                this.errorText = 'Veuillez remplir la formule'
            }
            else if(this.mypassword != this.testpassword){
                this.hasError = true;
                this.errorText = 'Confirmation de password et password incohérents';
            }
            else{
                this.opt= 'email='+this.myemail+'&password='+this.mypassword;
                fetch('http://localhost:3000/signup?'+this.opt, {
                    method: 'post',
                }).then(response => {
                    return response.json();
                }).then(data => {
                    if(data.message == "Signup successful"){
                        this.hasError = false;
                        this.errorText = '';
                        window.alert("signup successful");
                        this.$router.push({path:'/signin'});
                    }else{
                        this.hasError = true;
                        this.errorText = 'sigup failure';
                    }
                    
                }).catch(err => {
                    console.log(err);
                });
            }

            
        }
    },
}
</script>