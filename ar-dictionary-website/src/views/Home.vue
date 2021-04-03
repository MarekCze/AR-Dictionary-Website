<template>
  <div class="home">
    <AboutComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponent from "@/components/AboutComponent.vue";

export default {
  name: "Home",
  components: {
    AboutComponent,
  },
};
</script>
