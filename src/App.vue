<template>
  <v-app>
    <v-app-bar class="primary white--text" app>
      <v-toolbar-title
        :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
        >Vue And Vuetify Setup</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        class="font-weight-bold mt-5"
        color="white"
        label="Dark Mode"
        persistent-hint
      ></v-switch>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
