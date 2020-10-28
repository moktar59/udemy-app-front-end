<template>
    <div>
        <nav class="navbar bg-white border-bottom navbar-light">
            <router-link class="navbar-brand mr-auto" :to="{name: 'home'}">Home</router-link>
            <router-link class="btn nav-button" :to="{name: 'second'}">Second</router-link>
        </nav>
        <br/>
        <div class="container mt-4 mb-4 pr-4 pl-4">
            <h1>This is test</h1>
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>
