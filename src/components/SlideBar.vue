<template>
  <v-layout
    wrap
    style="height: 200px;"
  >
    <v-container>
      <v-layout>
        <v-btn
          color="pink"
          dark
          @click.stop="drawer = !drawer"
          @click="navigationDrawer()"
        >
          Master
        </v-btn>
      </v-layout>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      dark
      temporary
    >
      <!-- <v-list class="pa-1"> -->
        <!-- <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile> -->

        <!-- <v-list-tile avatar tag="div"> -->
          <!-- <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar> -->

          <!-- <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content> -->

          <!-- <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action> -->
        <!-- </v-list-tile> -->
      <!-- </v-list> -->
      <v-list class="pt-0" dense>
        <v-list-tile style="cursor:pointer">
          <v-list-tile-content>
            <v-list-tile-title @click="mainMasterClicked()">Main Master</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider light></v-divider>
        <v-list-tile style="cursor:pointer">
          <v-list-tile-content>
            <v-list-tile-title @click="accountMasterClicked()">Account Master</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider light></v-divider>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
const SlideBar = {
  name: 'SlideBar',
  data() {
    return {
      drawer: null,
      items: [
        { title: 'Main Master' },
        { title: 'Account Master'}
      ],
      mini: false,
      right: null
    }
  },
  methods: {
    navigationDrawer() {
      console.log('--------------', this.drawer)
    },
    mainMasterClicked() {
      this.$router.push({ path: '/main_master' })
      this.drawer = false;
    },
    accountMasterClicked() {
      this.$router.push({ path: '/account_master' })
      this.drawer = false;
    },
  }
}

export default SlideBar;
</script>
<style lang="scss" scoped>
#linear-progress {
  width: 30%;
  height: 12px;
  background-color: white;
  float: right;
}

.content-progress {
  width: 30%;
  height: 0px;
  background-color: white;
  float: right;
}

.v-content__wrap {
  height: 0px;
}
</style>
