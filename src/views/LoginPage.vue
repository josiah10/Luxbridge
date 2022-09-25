<template>
    <div class="logsig">
        <div class="left" v-show="show1">
            <h3>Create account</h3>
            <form action="">
                <label for="Email">Email address</label>
                <input type="email" v-model="email" id="Email" placeholder="you@example.com">
                <label for="password">Password</label>
                <input type="password" v-model="password" id="password" placeholder="Choose a password">
                <div class="flex">
                    <input type="checkbox">
                    <p>I agree with <span>terms</span> & <span>privacy policy</span></p>
                </div>
                <div class="btns"><button @click="register" type="submit">Sign up</button>
                        <p>Aready have an account <span style="cursor: pointer" @click="showLogin">login now</span></p>
                </div>

            </form>
        </div>

        <div class="right" v-if="show">
            <h3>Login to your account</h3>
            <form action="">
                <label for="Email1">Email address</label>
                <input type="email" v-model="email" id="Email1" placeholder="you@example.com">
                <label for="password1">Password</label>
                <input type="password" v-model="password" id="password1" placeholder="Enter your password">
                <div class="flex">
                    <input class="cb" type="checkbox">
                    <span class="jc">Stay logged in</span>
                    <span>forgot password?</span>
                </div>
                <div class="btns"><button type="submit">Login</button>
                    <p>Don't have an account? <span style="cursor: pointer" @click="showRegister">Register</span></p>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
import * as firebase from "firebase/auth";

    export default {
        name: "KidsView",
        data(){
            return{
                email:'',password:'',
                show:false,
                show1:true,
            }
        },
        methods:{
            showRegister(){
                this.show=false;
                this.show1=true
            },
            showLogin(){
                this.show1=false;
                this.show=true;
            },
            register(){
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
                .catch(function (error) {
                        let errorCode=error.code;
                        let errorMessage=error.message;
                        if (errorCode==='auth/weak-password'){
                            alert('this password is too weak');
                        }else {
                            alert(errorMessage)
                        }
                        console.log(error)
                })
            }
        }
    }
</script>

<style scoped>
.logsig{
    margin: 115px 350px 60px 350px;
}
    h3 {
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #0012B0;
    }
    label{
        font-size: 16px;
        line-height: 19px;
        color: #1C1C1C;
        font-weight: 600;
    }
    input[type='email']{
        background: #FCFBFF;
        border: 0.5px solid #DADEE8;
        width: 342px;
        height: 43.91px;
        margin-top: 9px;
        margin-bottom: 60px;
    }
input[type='password']{
    background: #FCFBFF;
    border: 0.5px solid #DADEE8;
    width: 342px;
    height: 43.91px;
    margin-top: 9px;
    }
    .flex{
        display: flex;
        margin-top: 30px;
     }
input[type='checkbox']{
    background: #FAB131;
    width: 20px;
   margin-right: 19px;
}

    span{
        color: #FAB131;
        text-decoration: underline;
    }
    button{
       color: #FFFFFF;
        background-color: #FAB131;
        border: 0.5px solid #DADEE8;
        padding: 13px 140px;
        font-size: 16px;
        margin-top: 60px;
        cursor: pointer;
    }
    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


    }
    .cb{
        height: 20px;
        margin-top: -2px;


    }
    .jc{
        text-decoration: none;
        margin-right: 390px;
    }
</style>