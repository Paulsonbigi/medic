<template>
    <div class="main-container">
        <v-container>
            <div class="header">
                <h2>Patient Testimonial</h2>
                <p>Let's see what our clients say about us. We offer complete healthcare</p>
            </div>
            <div class="slider">
                <v-sheet
                    class="mx-auto"
                    >
                    <v-slide-group
                        v-model="model"
                        class="slide-group"
                        mandatory
                        center-active
                        show-arrows
                    >
                        <v-slide-item
                            v-for="Comment in Comments"
                            :key="Comment.name"
                            v-slot="{ active, toggle}"
                        >
                            <v-card
                            color="#fff"
                            class="slide-card"
                            @click="toggle">
                                <div class="card-details">
                                    <div class="card-img">
                                        <v-img class="comment-img" :src="Comment.imgUrl"/>
                                    </div>
                                    <div class="testimonial-details">
                                        <h4>{{Comment.name}}</h4>
                                        <h6>{{Comment.title}}</h6>
                                        <p>{{Comment.comment}}</p>
                                    </div>
                                </div>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data: ()=>({
        model: null,
        Comments: [
            {
                imgUrl: "",
                name: "Sampson Totton",
                title: "Cardiology Patient",
                imgUrl: require("../assets/doctor1.png"),
                comment:
                "Medicine has existed for thousands of years during which nost of which it was an art (an area of skill and knowledge) frequently having connections",
            }, 
            {
                imgUrl: "",
                name: "Sara Bennet",
                title: "Physiotherapy Patient",
                imgUrl: require("../assets/doctor11.png"),
                comment:
                "Medicine has existed for thousands of years during which nost of which it was an art (an area of skill and knowledge) frequently having connections"
            },
            {
                imgUrl: "",
                name: "Serrena Plate",
                title: "Dentistry Patient",
                imgUrl: require("../assets/doctor3.png"),
                comment:
                "Medicine has existed for thousands of years during which nost of which it was an art (an area of skill and knowledge) frequently having connections"
            }
        ]
    })
}
</script>

<style scoped>
.main-container{
    background: #f1f4fa;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:  0 auto;
}
.header{
    margin-bottom: 50px;
    margin: 0 auto;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    line-height: 2;
    width: 60%;
    position: relative;
}
.header h2{
    font-size: 35px;
}
.header p{
    text-align: center;
    width: 60%;
    font-size: 15px;
    line-height: 1.5;
    opacity: 0.8;
}
.slide-group{
    background: #f1f4fa;
}
.slide-card{
    margin: 20px !important;
    width: 480px;
    height: 250px;
    padding: 10px;
    position: relative;
    overflow: visible;
}
.card-details{
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: center;
    position: relative;
    align-items: center;
    margin: auto !important;
}
.card-img{
    width: 30%;
    height: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.comment-img{
    border-radius: 50%;
}
.testimonial-details{
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.testimonial-details h4{
    font-size: 15px;
    line-height: 1.5;
}
.testimonial-details h6{
    font-weight: 300;
    font-size: 10px;
}
.testimonial-details p{
    font-size: 12px;
    line-height: 1.5;
    margin-top: 20px;
}
@media(max-width: 500px){
    .header{
        width: 80%;
        justify-content: center;
    }
    .header h2{
        font-size: 20px;
        text-align: center;
    }
    .header p{
        font-size: 10px;
        text-align: center;
    }
    .slide-card{
        width: 300px;
        height: 120px;
    }
    .testimonial-details h4{
        font-size: 12px;
        line-height: 1.5;
    }
    .testimonial-details h6{
        font-weight: 300;
        font-size: 8px;
    }
    .testimonial-details p{
        margin-top: 10px;
        font-size: 10px;
    }
}
</style>