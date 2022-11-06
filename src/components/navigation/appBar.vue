<template>
  <v-app-bar color="transparent" app dense flat>
    <v-app-bar-nav-icon
      @click.stop="$emit('openCloseNavBar')"
    ></v-app-bar-nav-icon>

    <v-spacer></v-spacer>
    <span v-if="$vuetify.breakpoint.mdAndUp" class="subtitle-1"
      >{{ dateTime.hours }}:{{ dateTime.minutes }}{{ " "
      }}{{ dateTime.ampm }}</span
    >
    <appBarMenu />
  </v-app-bar>
</template>

<script>
import appBarMenu from "./appBarMenu.vue";
export default {
  components: {
    appBarMenu,
  },
  data: () => ({
    dateTime: {
      hours: "--",
      minutes: "--",
      ampm: "",
    },
    timer: undefined,
  }),
  beforeMount() {
    if (localStorage.getItem("darkTheme") !== null) {
      this.$vuetify.theme.dark = JSON.parse(localStorage.getItem("darkTheme"));
    }
    if (localStorage.getItem("lightAccent")) {
      this.$vuetify.theme.themes.light.accent =
        localStorage.getItem("lightAccent");
    }
    if (localStorage.getItem("darkAccent")) {
      this.$vuetify.theme.themes.dark.accent =
        localStorage.getItem("darkAccent");
    }
    this.timer = setInterval(this.setDateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    setDateTime() {
      const date = new Date();
      this.dateTime = {
        hours: date.getHours() % 12,
        minutes: (date.getMinutes() < 10 ? "0" : "") + date.getMinutes(),
        ampm: date.getHours() >= 12 ? "PM" : "AM",
      };
    },
  },
};
</script>
