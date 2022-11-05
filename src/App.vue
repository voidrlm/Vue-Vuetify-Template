<template>
  <v-app>
    <v-main>
      <app-bar />
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import appBar from "./components/navigation/appBar";
export default {
  name: "App",

  components: {
    HelloWorld,
    appBar,
  },

  data: () => ({
    //
  }),
};
</script>
