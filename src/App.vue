<template>
  <MyHeader/>
  <MyHome/>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyHome from './components/MyHome.vue'

export default {
  name: 'App',
  components: {
    MyHome,
    MyHeader
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
