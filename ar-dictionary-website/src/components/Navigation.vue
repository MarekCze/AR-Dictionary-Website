<template>
    <nav>
        <ul class="main-menu">
          <li class="menu-item logo-li">
          </li>
          <li class="menu-item"><router-link :to="{ name: 'Home'}">HOME</router-link></li>
          <li class="menu-item"><router-link :to="{ name: 'SignIn'}">SIGN IN</router-link></li>
          <li class="menu-item"><a href="https://ardictionary602545972.wordpress.com/" target="_blank">BLOG</a></li>
        </ul>
    </nav>
</template>

<script>


export default {
    name: 'Navigation',
    components: {

    }
}
</script>