<template>
    <nav>
        <ul class="main-menu">
          <li class="menu-item logo-li">
          </li>
          <li class="menu-item"><router-link :to="{ name: 'Home'}">HOME</router-link></li>
          <li class="menu-item" v-if="!isLoggedIn"><router-link :to="{ name: 'SignIn'}">SIGN IN</router-link></li>          
          <li class="menu-item" v-if="isLoggedIn"><router-link :to="{ name: 'Notebooks'}">NOTEBOOKS</router-link></li>
          <li class="menu-item" v-if="isLoggedIn" v-on:click="signOut()">SIGN OUT</li>
          <li class="menu-item"><a href="https://ardictionary602545972.wordpress.com/" target="_blank">BLOG</a></li>
        </ul>
    </nav>
</template>

<script>
import firebase from "firebase";

export default {
    name: 'Navigation',
    data () {
      return {
          
      }
    },
    computed: {
        isLoggedIn(){
            return this.$store.getters.getIsLoggedIn
        }
    },
    methods: {
        signOut() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$store.commit("setUser", null)
                    this.$store.commit("setLoggedIn", false)
                    this.$router.push({ name: 'Home', query: { redirect: '/' } });
                })
        }
    }
}
</script>