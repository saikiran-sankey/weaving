<template>
  <div>
    <div style="float:left">
      <slidebar></slidebar>
    </div>
    <div>
      Welcome to Home
    </div>
  </div>
</template>

<script>
import Slidebar from './SlideBar.vue'

const Home = {
  name: 'Home',
  data() {
    return {

    }
  },
  components: {
    slidebar: Slidebar,
  }
}

export default Home;
</script>
<style lang="scss" scoped>
</style>
