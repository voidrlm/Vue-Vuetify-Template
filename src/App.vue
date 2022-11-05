<template>
  <v-app>
    <v-main>
      <nav-bar />
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import navBar from "./components/navigation/navBar";
export default {
  name: "App",
  components: {
    HelloWorld,
    navBar,
  },
  data: () => ({
    //
  }),
};
</script>
