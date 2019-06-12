<template>
  <div>
    <div style="float:left">
      <slidebar></slidebar>
    </div>
    <div>
      Welcome to Account master
    </div>
  </div>
</template>
<script>
import Slidebar from './SlideBar.vue'
const AccountMaster = {
  name: 'AccountMaster',
  data() {
    return {

    }
  },
  components: {
    slidebar: Slidebar,
  }
}
export default AccountMaster;
</script>
<style lang="scss" scoped>

</style>
