<template>
    <div class="main-container">
        <div class="header-contain"></div>
        <v-container>
            <div class="wrapper">
                <input
                    class="search-input"
                    v-model="search"
                    type="text"
                    placeholder="Search for medicine and health products"
                />
                <v-sheet
                class="mx-auto drug-show"
                >
                <v-carousel
                    cycle
                    show-arrows-on-hover="false"
                    show-arrows="false"
                    class="p-2 slide-group"
                    hide-delimiter-background
                >
                <v-carousel-item
                    v-for="advert in adverts"
                    :key="advert.name"
                    class="carousel"
                >
                    <v-card
                        color="#fff"
                        class="slide-card"
                        @click="toggle">
                                <v-img
                                    class="card-img"
                                    :src="advert.imgUrl">
                                    <div class="card-text">
                                        <h5>{{advert.title}}</h5>
                                        <p>{{advert.description}}</p>
                                    </div>
                                </v-img>
                    </v-card>
                </v-carousel-item>
                </v-carousel>
            </v-sheet>
                <v-row class="card-rol">
                    <v-col class="card-col" v-for="Drug in filteredDrugs" :key="Drug.id"
                        cols="6" xs="6" sm="4" md="3">
                        <v-card class="product-card">
                            <div class="header">
                                <h5>{{Drug.name}}</h5>
                                <v-img 
                                    class="header-img" 
                                    :src="Drug.drugImg"/>
                            </div>
                            <div class="text">
                                <p>{{Drug.description}}</p>
                                <h6>${{Drug.price}}</h6>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-container>
        
    </div>
</template>

<script>
import DrugsData from "../assets/data/Drugs.json"
export default {
    data(){
        return{
            Drugs: DrugsData,
            search: "",
            adverts: [
                {
                    title: "Easy payment",
                    description: "pay for items easily",
                    imgUrl:require("../assets/payment.jpg"),
                },
                {
                    title: "Easy delivery",
                    description :"get your items easily",
                    imgUrl:require("../assets/van.jpg"),
                },
                {
                    title: "Easy ordering",
                    description:"order for your items at your convenience",
                    imgUrl: require("../assets/drugs.jpg"),
                }
            ]
        }
    },
    computed: {
        filteredDrugs(){
            return this.Drugs.filter( drug => (
                drug.name.toLowerCase().includes(this.search.toLowerCase())
            ))
        }
    },
    mounted(){
        console.log(this.Drugs)
    }
}
</script>

<style scoped>
.main-container{
    display: flex;
    flex-direction: column;
}
.carousel{
    height: 300px;
    max-width: 2000px;
}
.drug-show{
    margin-bottom: 100px;
    height: 300px;
    max-width: 1000px;
    position: relative;
}
.search-input{
    margin-bottom: 20px;
    width: 100%;
    padding: 12px 24px;
    background: transparent;
    transition: transform 250ms ease-in-out;
    font-size: 15px;
    line-height: 18px;
    border: 1px solid  rgba(5, 20, 140, 0.8);
    color: #ccc;
    border-radius: 50px !important;
}
.search-input::placeholder{
    color: #ccc;
    font-size: 15px;
}
.search-input:hover, .search-input:focus{
    outline: 0;
    border: 1px solid  rgba(5, 20, 140, 0.8);
    border-radius: 0;
}
.header-contain{
    position: absolute;
    top: 0px;
    background: rgba(5, 20, 140, 0.8);
    width: 100%;
    height: 100px;
    right: 0px;
    left: 0px;
    padding: 0 !important;
}
.wrapper{
    padding-top: 60px;
}
.slide-group{
    max-width: 2000px;
    position: relative;
    height: 300px;
}
.slide-card{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    display: flex;
    height: 300px;
    max-width: 2000px;
}
.gallery-card{
    position: relative;
    background-position: right;  
    background-color: linear-gradient(to left, rgba(5, 20, 140, 0.8), rgba(5, 20, 140, 0.8));
}
.card-img{
    width: 100%;
    height: 250px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: linear-gradient(to left, rgba(5, 20, 140, 0.8), rgba(5, 20, 140, 0.8));
}
@media(max-width: 500px){
    .drug-show{
        margin-bottom: 50px;
        height: 120px;
        max-width: 500px;
    }
    .wrapper{
        padding-top: 30px;
    }
    .header-contain{
        height: 50px;
    }
    .drug-show{
        margin-bottom: 50px;
    }
    .gallery-card{
        position: relative;
        height: 120px;
        padding: 0px !important;
        max-width: 500px;
    }
    .slide-card{
        margin-bottom: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        height: 120px;
        max-width: 500px;
    }
    .search-input{
        width: 100%;
        margin: 0 auto;
        padding: 6px 12px;
        margin-bottom: 20px;
        font-size: 12px;
    }
    .search-input::placeholder{
        font-size: 12px;
    }
    .search-input:hover, .search-input:focus{
        padding: 6px 12px;
    }
    .card-img{
        width: 100%;
        height: 100%;
    }
}
.card-img::before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color:rgba(160, 76, 80, 0.3);
}
.card-text{
    padding: 20px 30px;
    justify-content: center;
    align-items: center;
    display: flex;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: relative;
}
.card-text:before{
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
}
.card-text h5{
    font-size: 35px;
    font-weight: lighter;
    color: #ffffff;
}
.card-text p{
    color: #ffffff;
    z-index: 2;
    font-weight: 800;
    text-align: left;
    font-size: 20px;
}
.header-img{
    width: 100px;
    height: 100px;
}
.text p{
        font-size: 12px;
        line-height: 1.5;
        width: 100% !important;
    }
.product-card{
    padding: 10px;
    position: relative;
}
.header{
    width: 100%;
    background: rgba(5, 20, 140, 0.8);
    padding: 10px;
    height: 30px;
    position: relative;
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
}
.header h5{
    font-size: 15px;
    color: #ffffff;
    font-weight: 600;
    width: 100%;
    position: absolute;
    text-align: center;
}
@media(max-width: 500px){
    .card-text h5{
        font-size: 20px;
    }
 .card-text p{
        color: #ffffff;
        font-weight: lighter !important;
        z-index: 2;
        text-align: left;
        font-weight: 800 !important;
        font-size: 10px;
    }  
    .card-img::before{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color:rgba(5, 20, 140, 0.5);
    } 
    .text p{
        font-size: 8px;
        line-height: 1.5;
    }
    .product-card{
        padding: 10px;
        position: relative;
    }
    .header{
        width: 100%;
        background: rgba(5, 20, 140, 0.8);
        padding: 5px;
        height: 20px;
        display: flex;
        margin-bottom: 10px;
        align-items: center;
        justify-content: center;
    }
    .header h5{
        font-size: 10px;
        color: #ffffff;
        font-weight: 600;
        text-align: center;
    }
}
</style>