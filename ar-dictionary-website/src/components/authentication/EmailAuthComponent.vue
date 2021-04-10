<template>
    <div class="email-login">
        <h1>Sign In</h1>
        <form class="login-form">
            <label for="emailInput">Email:</label>
            <input
             v-model="email"
             type="email"
             class="input"
             id="emailInput"
             placeholder="example@gmail.com">
            <label for="passwordInput">Password:</label>
            <input
             v-model="password"
             type="password"
             class="input"
             id="passwordInput"
             placeholder="Password">
            <button @click.prevent="emailSignIn()" class="login-btn">Sign In</button>
        </form>
    </div>
</template>

<script>

import firebase from "firebase"

export default {
    name: "EmailAuthComponent",
    data () {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        emailSignIn () {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(userCredential => {
                    let user = userCredential.user
                    console.log(user)

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