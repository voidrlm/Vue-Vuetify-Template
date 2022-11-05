<template>
  <v-app-bar class="primary white--text" app>
    <v-app-bar-nav-icon
      @click.stop="$emit('openCloseNavBar')"
    ></v-app-bar-nav-icon>

    <v-toolbar-title
      :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
      >Vue And Vuetify
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="$vuetify.breakpoint.smAndUp">
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        class="font-weight-bold mt-5"
        color="white"
        label="Dark Mode"
        persistent-hint
      ></v-switch>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
