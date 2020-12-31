<template>
    <div class="signup-container">
                <v-card class="signup-card">
                    <h5>Create Account</h5>
                    <v-form ref="signUpForm" @submit="formSubmit" v-model="formValidity">
                        <input class="input" placeholder="First Name"
                            type="text"
                            required
                            v-model="firstname"/>
                        <input placeholder="Last Name" class="input"
                            type="text"
                            required
                            v-model="lastname"/>
                        <input placeholder="Address" class="input"
                            type="text"
                            required
                            v-model="address"/>
                        <input placeholder="Email" class="input"
                            type="email" 
                            v-model="email"
                            :rules="emailRules" required/>
                        <input class="input"
                            :type="showPassword ? 'text' : 'password'" 
                            placeholder="Password"
                            required
                            v-model="password"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword"
                        />
                        <v-switch label="Agree to terms & conditions" 
                            v-model="agreeToTerms"
                            class="switch"
                            color="rgba(5, 20, 140, 0.8)"
                            :rules= "agreeToTermsRules" required/>
                        <v-btn type="submit" class="mr-2 button" color="rgba(5, 20, 140, 0.8)"
                            >Create Account</v-btn><span class="back"><nuxt-link to="/signin">back to sign in</nuxt-link></span>
                    </v-form>
                </v-card>
    </div>
</template>

<script>
export default {
    name: "signup",
    data(){
        return{
            firstname: "",
            lastname: "",
            password: "",
            address: "",
            showPassword: false,
            agreeToTerms: false,
            agreeToTermsRules: [
                value => !!value || 'You must agree to terms and conditions to sign up for an account'
            ],
            email: "",
            formValidity: false,
            emailRules: [
                value => !!value || 'Email is required.',
                value => value.indexOf('@') !== 0 || 'Email should have username.',
                value => value.includes('@') || 'Email should include @ symbol',
                value => value.indexOf('.') - value.indexOf("@") > 1 || 
                'Email should contain valid domian name',
                value => value.indexOf('.') <= value.length -3 ||
                'Email should contain valid extension'
            ],
        }
    },
    methods:{
        getInitials(){
            "Adegbokn Paul".split(" ").map( x => x.charAt(0).join("").substr(0, 2).toUpperCase()) 
        },
        formSubmit(e){
            e.preventDefault()
            window.location.href ="/"
        }
    },
    mounted(){
        console.log(this.getInitials)
    }
}
</script>

<style scoped>
.signup-container{
    width: 100%;
    display: flex;
    background: #f1f4fa;
    margin: auto;
    justify-content: center;
    align-items: center;
    height: 700px;
}
.signup-card{
  /* width: 50%; */
  padding: 20px;
  height: 500px;
}
.signup-card h5{
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 100;
    color: rgba(5, 20, 140, 0.8);
}
.input{
    margin-bottom: 20px;
    width: 100%;
    padding: 8px 14px;
    background: transparent;
    transition: transform 250ms ease-in-out;
    font-size: 15px;
    line-height: 18px;
    border: 1px solid  rgba(5, 20, 140, 0.8);
    color: #000;
    border-radius: 50px !important;
}
.input::placeholder{
    font-size: 12px;
    color: rgba(5, 20, 140, 0.8) !important;
    
}
.input:focus, .input:hover{
    outline: 0;
    border: 1px solid  rgba(5, 20, 140, 0.8);
    border-radius: 0;
}
.switch{
    margin-top: 0px;
    font-size: 7px !important;
    size: 9px !important;
}
.button{
    color: #ffffff;
    text-transform: capitalize;
    font-weight: 500;
}
.back a{
    text-decoration: none;
    color: rgba(5, 20, 140, 0.8);
}
@media(max-width: 500px){
    .signup-container{
        /* width: 90%; */
        height: 100vh;
    }
    .signup-card{
        width: 90%;
        height: 430px;
    }
    .input{
        padding: 5px 10px;
    }
    .button{
        width: 110px;
        font-size: 10px;
        font-weight: 800;
    }
}
</style>