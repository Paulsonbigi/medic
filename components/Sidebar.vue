<template>
  <div>
    <v-app-bar
      class="app-bar"
    >
    <v-container>
        <div  class="bar-container">
            <div class="logo">
                <p class="logo-title">Medic</p>
            </div>
            <ul class="bar-links" v-for="link in links" :key="link.label">
                <li><nuxt-link :to="link.urlLink">{{link.label}}</nuxt-link></li>
            </ul>
            <button>Join us</button>
        </div>
    </v-container>
    </v-app-bar>
  </div>
</template>


<script>
export default {
    props: {
        links: {
            type: Array,
            required: true
        }
    }
}
</script>
