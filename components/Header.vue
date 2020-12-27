<template>
    <div class="main-container">
        <v-app-bar class="app-bar">
            <v-container>
                <div class="bar-container">
                    <div class="logo"> Medic</div>
                    <div class="main-menu">
                        <ul class="bar-links" v-for="link in links" :key="link.label">
                            <li><nuxt-link :to="link.urlLink">{{link.label}}</nuxt-link></li>
                        </ul>
                        <button class="home-btn">Join us</button>
                    </div>
                    <v-card class="mobile-menu" ref="dropdownMenu"  :class="{open : showNav}">
                        <ul class="mobile-links" v-for="link in links" :key="link.label">
                            <li><nuxt-link :to="link.urlLink">{{link.label}}</nuxt-link></li>
                        </ul>
                        <button class="mobile-btn">Join us</button>
                    </v-card>
                    <div class="nav-icon">
                        <v-app-bar-nav-icon @click="toggleMenu" color="#ffffff" rounded></v-app-bar-nav-icon>
                    </div>
                </div>
            </v-container>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    props: {
        links: {
            type: Array,
            required: true
        }
    },
    data(){
        return{
            showNav: true,
        }
    },
    methods: {
        toggleMenu(){
            this.showNav = !this.showNav
        },
        close(e){
            let el = this.$refs.dropdownMenu
            let target = e.target
            console.log(target)
            // if((el !== target) && !el.contains(target)){
            //     this.showNav = !showNav
            // }
            // setTimeout(()=>{
            //     this.showNav = false
            // }, 200)
        }
    },
    created(){
        // document.addEventListener("click", this.close)
    },
    destroyed(){
        // document.removeEventListener("click", this.close)
    }
}
</script>

<style scoped>
.main-container{
    width: 100%;
    padding: 20px 0px;
    position: relative;
    z-index: 20;
}
.navbar-active{
    background: ;
}
.app-bar{
    background: transparent !important;
    box-shadow: none !important;
    z-index: 100 !important;
}
.mobile-view{
    display: none;
}
.mobile-links{
    display: none;
}
.mobile-btn{
    display: none;
}
.nav-icon{
    display: none;
}
.bar-container{
    display: flex !important;
    align-items: center;
}
.logo{
    color: #ffffff;
    flex: 2;
}
.main-menu{
    flex: 8;
    display: flex;
    justify-content: space-between;
}
.bar-links{
    /* flex: 2.5; */
    list-style: none !important;
    align-items: center;
    justify-content: space-evenly;
}
.bar-links li{
    display: flex;
    list-style: none !important;
}
.bar-links li{
    display: flex;
    list-style: none !important;
}

li a{
    text-decoration: none;
    color: #ffffff;
    font-weight: 300;
}
li:hover{
    border-bottom: #ffffff;
}
.home-btn, .mobile-btn{
    background: rgb(5, 108, 242) !important;
    padding: 5px 10px;
    color: #ffffff;
}
@media(max-width: 769px){
    .main-container{
        padding: 0px;
    }
    .main-menu{
        display: none;
    }
    .mobile-menu{
        display: flex;
        flex-direction: column;
        position: absolute;
        background: #ffffff;
        top: 50px;
        right: 0px;
        left: 0px;
        height: 40vh;
        z-index: 30;
        padding-bottom: 20px;
        padding-top: 20px;
    }
    .nav-icon{
        z-index: 120;
        right: 10px;
        display: flex;
        color: #ffffff;
    }
    .mobile-links{
        display: flex;
        flex-direction: column;
        list-style: none !important;
        align-items: left;
        height: 70% !important;
        justify-content: space-around;
    }
    li a{
        text-decoration: none;
        color: rgb(5, 108, 242);
        font-weight: 300;
    }
    li:hover{
        border-bottom: #ffffff;
    }
    .mobile-btn{
        display: flex;
        justify-content: center;
        width: 40%;
        align-items: center;
        margin: 0 auto;
    }
    .open{
        transform: translate(-800px);
    }
}
</style>