<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="deep-orange darken-3"
      height="50"
      dark>
        <v-img
          alt="geospoc_logo"
          class="shrink mr-2"
          contain
          src="../src/assets/pin.png"
          transition="scale-transition"
          width="30"/>

        <v-toolbar-title class="white--text"> GeoSpoc <small> - Test Project</small></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn to="/dashboard" text small dark=""><v-icon size="26" left>dashboard</v-icon>Dashboard</v-btn>
        <v-btn to="/about" text small dark=""><v-icon size="26" left>info_outline</v-icon>About</v-btn>

    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss">
// ::-webkit-scrollbar{
//   display: none;
//   overflow: hidden;
// }
</style>

<script>
export default {
  name: 'App',
  props: {
      source: String,
    },
  components: {
  },

  data: () => ({
    drawer: null,
    //
  }),
};
</script>
