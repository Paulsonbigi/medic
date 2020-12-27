<template>
    <v-container>
        <div class="main-container">
            <div class="welcome-text">
                <h1>Welcome to Medic</h1>
                <p>Medic is a pharmaceutical centre of excellence portfolio of branded generics in biotech, cardiovascular, diabetes, gastroenterology, respiratory, inflammatory diseases, pain management, asteoporosis, psychiatry and OTC segments. <br>
                    <br>
                    Our R&D is structured around partnerships with European Contract Research Organizations (CROs). These partnerships help us adhere to excellent manufacturing practices, ensuring that our products meet highest international standards for safety and efficacy
                </p>
            </div>
            <div class="welcome-img">
            </div>
        </div>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .main-container{
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
    }
    .welcome-text{
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 500px;
    }
    .welcome-text h1{
        font-size: 35px;
        text-align: left;
        margin-bottom: 20px;
    }
    .welcome-text p{
        line-height: 2;
    }
    .welcome-img{
        width: 60%;
        height: 500px;
        background: url(./../assets/building1.jpg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media(max-width: 769px){
        .main-container{
            flex-direction: column;
            padding: 0px 20px;
            flex: 10;
        }
        .welcome-text{
            width: 100%;
            flex: 10;
            margin-bottom: 50px;
        }
        .welcome-text h1{
            font-size: 25px;
            text-align: center;
            margin-bottom: 15px;
        }
        .welcome-text p{
            font-size: 15px;
            line-height: 2;
        }
        .welcome-img{
            background-position: center;
            flex-direction: column;
            width: 90%;
            height: 400px;
        }
    }
@media(max-width: 500px){
    .welcome-img{
        height: 350px;
    }
}
</style>