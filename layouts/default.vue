<template>
  <v-app>
    <div class="main-container">
      <div class="main-header" :class="{nav_active: scrollPosition > 80}">
        <Header class="header" :links="links"/>
      </div>
      <div class="main-body">
          <nuxt />
      </div>
    </div>
  </v-app>
</template>


<script>
import Header from "../components/Header"

export default {
  components: {
      Header
  },
  data(){
    return{
      mobileView: false,
      showNav: false,
      scrollPosition: null,
      links: [
            {
                label: "Home",
                urlLink: "/"
            },
            {
                label: "Pharmassentials",
                urlLink: "/pharmassentials"
            },
            {
                label: "Products",
                urlLink: "/products"
            },
            {
                label: "Contact Us",
                urlLink: "/contact"
            },
            {
                label: "Latest Update",
                urlLink: "/latest"
            }
        ],
    }
  },
  methods: {
    updateScroll(){
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll)
  }
}
</script>

<style scoped>
.nav_active{
  position: fixed;
  background: rgb(5, 20, 140);
  z-index: 300;
  width: 100%;
}
</style>