<template>
    <div>
        <button class="google-btn" v-on:click="googleSignIn()">Sign In With Google</button>
        <button class="email-btn" v-on:click="googleSignIn()">Sign In With Email</button>
    </div>
</template>

<script>

import firebase from "firebase";

export default {
  name: "AuthComponent",
  data () {
      return {
          authType: ''
      }
  },
  components: {

  },
  methods: {
      changeAuthType (authType) {
          this.$store.commit("setAuthType", authType)
      },
      googleSignIn () {
          let provider = new firebase.auth.GoogleAuthProvider()

          firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                //let credential = result.credential
                //let token = credential.accessToken
                let user = result.user

                this.$store.commit("setUser", user)
                this.$store.commit("setLoggedIn", true)
                this.$router.push({ name: 'Home', query: { redirect: '/' } });
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;

                console.log("authentication error:\n" + errorCode + "\n" + errorMessage + "\n" + email + "\n" + credential)

            });
      }
  }
}
</script>
