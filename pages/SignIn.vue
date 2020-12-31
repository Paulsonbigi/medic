<template>
    <div class="signup-container">
      <v-card class="signup-card">
        <div class="header">
          <h5>Sign In</h5>
          <v-btn @click="home" class="back-button" color="rgba(5, 20, 140, 0.8)"
                  >Back</v-btn>
        </div>
          <v-form ref="signUpForm" @submit="formSubmit" v-model="formValidity">
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
              <v-btn type="submit" class="mr-4 button" color="rgba(5, 20, 140, 0.8)"
                  >Sign In</v-btn> 
                  <span class="link-to-signup"><nuxt-link to="/signup">Don't have an account</nuxt-link></span>
          </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
  name:"signin",
    data(){
        return{
            password: "",
            showPassword: false,
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
        },
        home(e){
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
    height: 500px;
}
.signup-card{
  width: 50%;
  padding: 20px;
  height: 400px;
}
.header{
  display: flex;
  justify-content: space-between;
}
.back-button{
  width: 80px;
  margin-top: 0px !important;
  color: #ffffff;
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
    font-size: 7px !important;
    size: 9px !important;
}
.button{
    color: #ffffff;
    text-transform: capitalize;
    font-weight: 500;
}
a{
  text-decoration: none;
}
.link-to-signup a{
  color: rgba(5, 20, 140, 0.8);
}
@media(max-width: 500px){
    .signup-card{
        width: 90%;
        height: 300px;
    }
    .header{
      flex-direction: column;
      margin-bottom: 30px;
    }
    .signup-card h5{
      margin-bottom: 0px;
    }
    .back-button{
      width: 60px;
      font-weight: 500 !important;
    }
    .input{
        padding: 5px 10px;
    }
    .link-to-signup a{
      font-size: 10px;
    }
    .button{
        width: 110px;
        font-size: 10px;
        font-weight: 800;
    }
}
</style>