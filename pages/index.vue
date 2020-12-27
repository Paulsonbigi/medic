<template>
    <div class="cover">
        <div class="main-overlay">
            <v-container>
                <div class="overlay">
                    <h1>Center of excellence - Focussed on total quality management</h1>
                    <p class="description">
                        Medic is a pharmaceutical centre of excellence with a diversified portfolio of branded generics
                    </p>
                    <button class="home-btn">EXPLORE MORE</button>
                </div>
            </v-container>
        </div>
        <div class="components">
            <Welcome/>
            <Gallery :Profiles="profiles"/>
            <Products :Products="products"/>
            <Contact/>
        </div>
    </div>
</template>

<script>
import Welcome from "../components/Welcome"
import Gallery from "../components/Gallery"
import Products from "../components/Products"
import Contact from "../components/Contact"
export default {
    components: {
        Welcome,
        Gallery,
        Products,
        Contact
    },
    data(){
        return{
            profiles: [
                {
                    profileUrl: require("../assets/research1.jpg"),
                    description: "Good Manufacturing Practices Gallery"
                },
                {
                    profileUrl: require("../assets/research2.jpg"),
                    description: "Total Quality Manufacturing Gallery"
                },
                {
                    profileUrl: require("../assets/tubes.jpg"),
                    description: "Health & OTG Gallery"
                }
            ],
            products: [
                {
                    productUrl: require("../assets/precision.png"),
                    title: "Identification",
                    details: "Medic uses state of art, FDA 21 CRF (Code of Federal Regulations Part 11) compliant Shimadzu Prominence i-LC-20AT HPLC and shimadzu Fourier transform intra-Red Spectrophatometer [FTIR] technology to identify and characterize the chemical entity of APIs and finished products"
                },
                {
                    productUrl: require("../assets/Gram.png"),
                    title: "Purity, Potency & Organic impurities",
                    details: "Medic  uses state of art, FDA 21 CRF (Code of Federal Regulations Part 11) compliant Shimadzu Prominence i-LC-20AT HPLC and shimadzu Fourier transform intra-Red Spectrophatometer [FTIR] technology to identify and characterize the chemical entity of APIs and finished products"
                },
                {
                    productUrl: require("../assets/centrifuge1.png"),
                    title: "Residual Solvents",
                    details: "Medic  uses state of art, FDA 21 CRF (Code of Federal Regulations Part 11) compliant Shimadzu Prominence i-LC-20AT HPLC and shimadzu Fourier transform intra-Red Spectrophatometer [FTIR] technology to identify and characterize the chemical entity of APIs and finished products"
                },
                {
                    productUrl: require("../assets/centrifuge.png"),
                    title: "Elemental Impurities & Heavy Metals",
                    details: "Medic  uses state of art, FDA 21 CRF (Code of Federal Regulations Part 11) compliant Shimadzu Prominence i-LC-20AT HPLC and shimadzu Fourier transform intra-Red Spectrophatometer [FTIR] technology to identify and characterize the chemical entity of APIs and finished products"
                }
            ]
        }
    }
}
</script>
<style scoped>
.cover{
    display: flex;
    flex-direction: column;
}
.main-overlay{
    width: 100%;
    position: absolute;
    top: 0px;
    background-image: linear-gradient(to left, rgba(5, 20, 140, 0.8), rgba(5, 20, 140, 0.8)), url(../assets/research2.jpg);
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
    height: 800px;
    display: flex;
    align-items: center;
}
.components{
    margin: 0 auto;
    margin-top: 800px;
    width: 100%;
}
.overlay{
    padding-right: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.overlay h1{
    font-size: 50px;
    color: #ffffff;
}
.description{
    font-size: 18px;
    color: #ffffff;
    margin-top: 10px;
    line-height: 2;
}

.home-btn{
    background: rgb(5, 108, 242) !important;
    padding: 15px 25px;
    font-weight: 800;
    border-radius: 5px;
    font-size: 12px;
    margin-top: 30px;
    color: #ffffff;
    width: 300px;
}
.profile{
    padding-top: 150px;
    display: flex;
    flex-direction: column;
}
.profile h2{
    margin-left: 20px;
    position: relative;
    display: flex;
    align-items: center;
}
.profile h2::before{
    contain: "";
    position: absolute;
    width: 10px;
    height: 3px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: red;
}
.operation-row{
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
    
}
.profile-col{
    padding: 0px !important;
}
@media(max-width: 769px){
    .components{
        margin-top: 650px;
        max-width: 100%;
        position: relative;
    }
    .operation-row{
        justify-content: center;
    }
    .main-overlay{
        height: 650px;
        justify-content: center;
    }
    .overlay{
        padding: 50px;
        justify-content: center;
    }
    .overlay h1{
        text-align: center;
        font-size: 25px;
    }
    .description{
        font-size: 12px;
        text-align: center;
    }
    .home-btn{
        background: rgb(5, 108, 242) !important;
        padding: 10px 15px;
        width: 200px;
        font-weight: 800;
        border-radius: 5px;
        font-size: 12px;
        margin-top: 30px;
        color: #ffffff;
        margin: auto;
        margin-top: 30px;
    }
}
@media(max-width: 500px){
    .components{
        margin-top: 100vh;
    }
    .main-overlay{
        height: 100vh;
    }
}
</style>