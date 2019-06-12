<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted() {
    this.$router.push({ path: '/' })
  }
}
</script>

<style lang="scss">
</style>
