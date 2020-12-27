<template>
    <div class="main-cover">
        <v-container>
            <h2 class="title">Medic Products</h2>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga voluptatibus officiis debitis praesentium et minus explicabo commodi beatae iure, delectus quidem eum repellendus nemo?</p>
            <v-row class="card-rol">
                <v-col class="card-col" v-for="Product in Products" :key="Product.id"
                    cols="6" xs="6" sm="6" md="6">
                    <v-card class="product-card">
                        <div class="header">
                            <h2>{{Product.name}}</h2>
                            <v-img class="header-img" :src="Product.productUrl"/>
                        </div>
                        <div class="text">
                            <p>{{Product.details}}</p>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    props: {
        Products: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.main-cover{
    background: #f1f4fa;
    padding-top: 50px;
}
.card-rol{
    padding: 10px;
}
.card-col{
    padding: 10px;
}
.title{
    font-size: 25px !important;
    font-weight: 800;
}
.description{
    font-size: 20px;
    margin-bottom: 40px;
}
.product-card{
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 20px 40px;
    margin: 0px;
    justify-content: center;
}
.header{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    height: 100px;
}
.header-img{
    width: 100px;
    flex: 4;
    position: absolute;
    right: 0px;
}
.header h2{
    font-size: 25px;
    width: 80%;
}
.text{
    font-size: 20px;
}
@media(max-width: 500px){
    .card-col{
        padding: 5px;
    }
    .header h2{
        font-size: 12px;
    }
    .header{
        height: 40px;
    }
    .product-card{
        padding: 15px 10px;
    }
    .text{
        line-height: 2;
        font-size: 10px;
    }
    .title{
        font-size: 15px !important;
    }
    .description{
        font-size: 12px;
        line-height: 2;
    }
    .header-img{
        width: 50px;
        flex: 4;
        position: absolute;
        right: 0px;
    }
}
</style>