<template>
  <div id="nav">
    <head>
      <meta charset="utf-8">
      <title>Marek Czerniejewski</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <header>
      <Navigation></Navigation>
    </header>
  </div>
  <router-view />
</template>


<script>
import Navigation from '@/components/Navigation';


export default {
  data: () => {
    return {
      mobile: false
    }
  },
    components: {
        Navigation
    },
    created() {

    },
    mounted() {

    },
    methods: {

      }
}
</script>


<style lang="scss">
@import 'assets/css/style.scss'
</style>
