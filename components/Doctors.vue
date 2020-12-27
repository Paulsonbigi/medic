<template>
    <div class="main-container">
        <v-container>
            <div class="title">
                <h2>Our Professionals</h2>
            </div>
            <v-sheet
                class="mx-auto"
                >
                <v-slide-group
                    v-model="model"
                    class="p-2 slide-group"
                    mandatory
                    center-active
                    show-arrows
                >
                    <v-slide-item
                        v-for="Doctor in doctors"
                        :key="Doctor.name"
                        v-slot="{ active, toggle}"
                    >
                        <v-card
                        color="#fff"
                        class="slide-card"
                        @click="toggle">
                            <div class="card-container">
                                <v-card class="img-card" flat="" :color="Doctor.color">
                                    <v-img class="card-img" :src="Doctor.imgUrl"/>
                                </v-card>
                                <div class="details">
                                    <h4>{{Doctor.name}}</h4>
                                    <h5>{{Doctor.specialty}}</h5>
                                    <div class="social-icons">
                                        <p><fa class="one-font" :icon="faFacebook"/></p>
                                        <p><fa class="one-font" :icon="faTwitter"/></p>
                                        <p><fa class="one-font" :icon="faInstagram"/></p>
                                        <p><fa class="one-font" :icon="faLinkedinIn"/></p>
                                    </div>
                                </div>
                            </div>
                            <v-row
                                class="fill-height"
                                align="center"
                                justify="center">
                                <v-scale-transition>
                                    <v-icon
                                        v-if="active"
                                        color="white"
                                        size="48"
                                        v-text="'mdi-close-circle-outline'"
                                    ></v-icon>    
                                </v-scale-transition>    
                            </v-row>
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </v-sheet>
        </v-container>
    </div>
</template>

<script> 
import { faFacebook, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
export default {
    data:() => ({
        model: null,
        doctors: [
            {
                name: "Dr Joseph Adam",
                specialty: "Cardiologist",
                fbAddress: "#",
                twAddress: "#",
                instagram: "#",
                linkedin:"#",
                color: "#f2cc5d",
                imgUrl: require("../assets/doctor1.png"),
            },
            {
                name: "Dr Sara Wright",
                specialty: "Dentist",
                fbAddress: "#",
                twAddress: "#",
                instagram: "#",
                linkedin:"#",
                color: "#5144a6",
                imgUrl: require("../assets/doctor11.png")
            },
            {
                name: "Dr Peace Awofiranye",
                specialty: "Physiotherapist",
                fbAddress: "#",
                twAddress: "#",
                instagram: "#",
                linkedin:"#",
                color: "#f266a7",
                imgUrl: require("../assets/doctor3.png")
            },
            {
                name: "Dr Nick Seam",
                specialty: "Neurologist",
                fbAddress: "#",
                twAddress: "#",
                instagram: "#",
                linkedin:"#",
                color: "#d8d0f2",
                imgUrl: require("../assets/doctor10.png")
            },
            {
                name: "Dr Posu Marvelous",
                specialty: "Physiotherapist",
                fbAddress: "#",
                twAddress: "#",
                instagram: "#",
                linkedin:"#",
                color: "#f2cc5d",
                imgUrl: require("../assets/doctor5.png")
            },
            {
                name: "Dr Merry Joe",
                specialty: "Cardiologist",
                fbAddress: "#",
                twAddress: "#",
                instagram: "#",
                linkedin:"#",
                color: "#5144a6",
                imgUrl: require("../assets/doctor6.png")
            },
            {
                name: "Dr Cams Wilson",
                specialty: "Dentist",
                fbAddress: "#",
                twAddress: "#",
                instagram: "#",
                linkedin:"#",
                color: "#d8d0f2",
                imgUrl: require("../assets/doctor7.png")
            },
            {
                name: "Dr Merry Ruth",
                specialty: "Neurologist",
                fbAddress: "#",
                twAddress: "#",
                instagram: "#",
                linkedin:"#",
                color: "#f266a7",
                imgUrl: require("@/assets/doctor8.png")
            }
        ]
    }),
    computed: {
        faFacebook(){
            return faFacebook
        },
        faTwitter(){
            return faTwitter
        },
        faLinkedinIn(){
            return faTwitter
        },
        faInstagram(){
            return faInstagram
        }
    }

}
</script>

<style scoped>
.main-container{
    background: #f1f4fa;
    padding-bottom: 70px;
}
.slide-group{
    background: #f1f4fa;
}
.title{
    margin-bottom: 50px;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 35px;
}
.title h2{
    font-size: 35px;
}
.social-icons{
    display: flex;
    width: 40%;
    height: 100%;
    padding: 10px;
    justify-content: space-evenly;
}
.one-font{
    color: rgba(5, 20, 140, 0.8);
}
.slide-card{
    margin: 20px !important;
    width: 350px;
    height: 420px;
    padding: 10px;
    /* position: relative; */
    overflow: visible;
}
.card-container{
    position: relative;
    height: 100%;
    width: 100%;
}
.img-card{
    height: 75%;
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.card-img{
    position: absolute;
    bottom: 0px;
    height: 110%;
    width: 95%;
}
.details{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
}
.details h5{
    font-size: 10px;
    font-weight: 300;
}
@media(max-width: 500px){
    .title{
        margin-bottom: 10px;
    }
    .title h2{
        text-align: center;
        font-size: 25px;
    }
    .slide-card{
        width: 300px;
        margin: 5px !important;
        margin-top: 20px !important;
        height: 350px;
    }
}
</style>