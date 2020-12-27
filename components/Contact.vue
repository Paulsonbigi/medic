<template>
    <div class="main-container">
        <v-container>
                <div class="add-container">
                    <div class="address">
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, excepturi illo. Rem tempora autem est repellat asperiores deserunt, doloribus quod.</p>
                        <div class="detailed">
                            <span>+234 81243546</span>
                            <span>abetternigeria@gmail.com</span>
                            <span>Lagos, Nigeria</span>
                        </div>
                    </div>
                    <div class="form-section">
                        <v-card class="form-card">
                            <v-textarea
                                outlined
                                height="20px"
                                name="input"
                                rows="1"
                                row-height="10"
                                label=""></v-textarea>
                                
                                <v-textarea
                                outlined
                                height="20px"
                                name="input"
                                rows="1"
                                row-height="10"
                                label=""></v-textarea>

                                <v-textarea
                                outlined
                                height="50px"
                                name="input"
                                rows="4"
                                row-height="30"
                                label=""></v-textarea>
                        </v-card>
                    </div>
                </div>   
        </v-container>
    </div>
</template>
<style scoped>
.main-container{
    width: 100%;
    top: 0px;
    background-image: linear-gradient(to left, rgba(5, 20, 140, 0.8), rgba(5, 20, 140, 0.8)), url(../assets/young.jpg);
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
    height: 600px;
    display: flex;
    align-items: center;
    color: #ffffff;
}
.add-container{
    display: flex;
    position: relative;
}
.form-card{
    margin-top: 50px;
    padding: 50px 20px ;
    width: 100%;
}
.address{
    display: flex;
    width: 50%;
    flex-direction: column;
}
.form-section{
    width: 50%;
}
.detailed{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}
.detailed span{
    margin: 5px 20px;
    font-size: 10px;
}

@media(max-width: 769px){
    .main-container{
        height: 800px;
    }
    .add-container{
        flex-direction: column;
    }
    .address{
        width: 100%;
    }
    .form-section{
        width: 100%;
    }
    .form-card{
        height: 400px;
        display: flex;
        flex-direction: column;
        align-content: center;
    }
    .address h2{
        font-size: 20px;
    }
    .address p{
        font-size: 12px;
    }
}
</style>