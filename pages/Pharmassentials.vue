<template>
    <div class="main-container">
        <div class="header"></div>
        <v-container>
            <div class="pharm-col"> 
                <div class="pharm-images">
                    <div class="pharm-img one">
                    </div>
                    <div class="pharm-img two">
                    </div>
                </div>
                <div class="pharm-description">
                    <h2>About Us </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad rerum inventore consequuntur voluptatem 
                        repellendus consequatur expedita eum velit dignissimos?
                    </p>
                    <button class="pharm-btn">Read more</button>
                </div>
            </div>
        </v-container>
        <div class="more-content">
            <Doctors/>
            <Testimonial/>
        </div>
    </div>
</template>

<script>
import Doctors from "../components/Doctors"
import Testimonial from "../components/Testimonial"
export default {
    components: {
        Doctors,
        Testimonial
    }
}
</script>
<style scoped>
.main-container{
    display: flex;
    flex-direction: column;
}
.header{
    position: absolute;
    top: 0px;
    background: rgba(5, 20, 140, 0.8);
    width: 100%;
    height: 100px;
    right: 0px;
    left: 0px;
    padding: 0 !important;
}
.pharm-col{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    position: relative;
    height: 700px;
    width: 100%;
}
.pharm-images{
    height: 100%;
    flex-direction: column;
    display: flex;
    width: 60%;
    position: relative;
    height: 100%;
    justify-content: center;
}
.pharm-img{
    height: 100%;
    display: flex;
    background-image: url(../assets/stethoscope.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
    width: 320px;
    position: relative;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    transform: rotate(90deg);
}
.pharm-img.one{
    display: flex;
    background: rgba(5, 20, 140, 0.7);
    position: absolute;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    transform: rotate(45deg);
    right: 0px;
    left: 0px;
}
.pharm-description{
    width: 40%;
    justify-content: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
}
.pharm-description p{
    font-size: 20px;
    line-height: 2;
}
.pharm-description h2{
    text-align: left !important;
}
.pharm-btn{
    justify-content: left !important;
    width: 150px;
    color: #ffffff !important;
    background: rgba(5, 20, 140, 0.8);
    padding: 10px;
}
.more-content{
    margin: 0 auto;
    margin-top: 100px;
    width: 100%;
}
@media(max-width: 500px){
    .main-container{
        padding-top: 0px;
    }
    .header{
        height: 70px;
    }
    .pharm-col{
        flex-direction: column;
    }
    .pharm-images{
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 100%;
    }
    .pharm-img{
        width: 220px;
        height: 280px;
        position: relative;
        justify-content: center;
        margin: 0 auto;
    }
    .pharm-img.pharm-img.one{
        position: absolute;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0px;
        right: 0px;
    }
    .pharm-description{
        width: 100%;
    }
    .pharm-description h2{
        font-size: 25px;
        margin-bottom: 30px;
    }
    .pharm-description p{
        font-size: 15px;
        line-height: 2;
        margin-bottom: 20px;
    }
    .more-content{
        margin-top: 0px;
    }
}
</style>