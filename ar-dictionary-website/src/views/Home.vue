<template>
  <div class="home">
    <AboutComponent/>
    <AppGuideComponent/>
    <DownloadAppComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponent from "@/components/AboutComponent.vue";
import AppGuideComponent from "@/components/AppGuideComponent.vue";
import DownloadAppComponent from "@/components/DownloadAppComponent.vue";

export default {
  name: "Home",
  components: {
    AboutComponent,
    AppGuideComponent,
    DownloadAppComponent,
  },
};
</script>
