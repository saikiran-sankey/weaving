<template>
  <div>
    <div style="float:left">
      <slidebar></slidebar>
    </div>
    <div>
      Welcome to Main master
    </div>
  </div>
</template>

<script>
import Slidebar from './SlideBar.vue'
const MainMaster = {
  name: 'MainMaster',
  data() {
    return {

    }
  },
  components: {
    slidebar: Slidebar,
  },
  methods: {

  },
}
export default MainMaster
</script>

