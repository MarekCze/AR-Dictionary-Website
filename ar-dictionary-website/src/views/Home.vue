<template>
  <div class="home">
    <AboutComponent/>
    <AppGuideComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponent from "@/components/AboutComponent.vue";
import AppGuideComponent from "@/components/AppGuideComponent.vue";

export default {
  name: "Home",
  components: {
    AboutComponent,
    AppGuideComponent,
  },
};
</script>
