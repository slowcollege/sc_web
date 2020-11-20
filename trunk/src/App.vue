<template>
  <div id="app">
      <router-view :key="$route.fullPath"></router-view>
<!--      <router-view v-if="!$route.meta.keepAlive" :key="$route.fullPath"></router-view>-->
<!--      <keep-alive>-->
<!--          <router-view v-if="$route.meta.keepAlive" :key="$route.fullPath"></router-view>-->
<!--      </keep-alive>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
