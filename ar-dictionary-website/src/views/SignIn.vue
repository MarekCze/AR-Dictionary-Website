<template>
    <AuthComponent v-if="authType === 'auth'"/>
    <EmailAuthComponent v-if="authType === 'email'"/>
    <GoogleAuthComponent v-if="authType === 'google'"/>
</template>

<script>
// @ is an alias to /src
import AuthComponent from "@/components/authentication/AuthComponent.vue";
import GoogleAuthComponent from "@/components/authentication/GoogleAuthComponent.vue";
import EmailAuthComponent from "@/components/authentication/EmailAuthComponent.vue";

export default {
  name: "SignIn",
  data () {
      return {
        
      }
  },
  computed: {
    authType(){
      return this.$store.getters.getAuthType
    }
  },
  components: {
    AuthComponent,
    GoogleAuthComponent,
    EmailAuthComponent,
  },
  methods: {

  }
};
</script>