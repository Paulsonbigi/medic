<template>
    <v-container>
        <span>
            <h2 class="title">Medic Gallary</h2>
        </span>
        <v-row class="gallery-container">
            <v-col cols="12" xs="12" sm="4" md="4" class="card-col"
                v-for="Profile in Profiles" :key="Profile.id">
                <v-card class="gallery-card">
                    <v-img
                        class="card-img"
                        :src="Profile.profileUrl">
                        <div class="card-text">
                            <p>{{Profile.description}}</p>
                        </div>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    props: {
        Profiles: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.gallery-container{
    margin: 0 auto;
    align-items: center;
    justify-content: center;
}
span h2{
    margin-left: 12px;
    font-size: 12px !important;
    font-weight: 800 !important;
}
.gallery-card{
    position: relative;
    background-position: right;  
    background-color: linear-gradient(to left, rgba(5, 20, 140, 0.8), rgba(5, 20, 140, 0.8));
}
.card-img{
    width: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: linear-gradient(to left, rgba(5, 20, 140, 0.8), rgba(5, 20, 140, 0.8));
}
@media(max-width: 500px){
    .card-img{
        width: 350px;
        height: 100px;
    }
}
.card-img::before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color:rgba(5, 20, 140, 0.3);
}
.card-text{
    padding: 20px 30px;
    justify-content: center;
    align-items: center;
    display: flex;
    display: flex;
    margin: 0 auto;
    position: relative;
}
.card-text:before{
    content: "";
    position: absolute;
    height: 100%;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    background-image: linear-gradient(to left, rgba(5, 20, 140, 0.7), rgba(5, 20, 140, 0.7));
}
.card-text p{
    color: #ffffff;
    font-weight: 800;
    z-index: 2;
    text-align: center;
    display: flex;
    margin: 0 auto;
    font-size: 20px;
}
</style>