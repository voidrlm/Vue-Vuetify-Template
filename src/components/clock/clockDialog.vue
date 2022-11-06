<template>
  <v-dialog fullscreen :value="showClock" transition="dialog-bottom-transition">
    <v-toolbar :color="$vuetify.theme.dark ? '#121212' : '#FFFFFF'"
      ><v-spacer />
      <v-btn
        icon
        :color="$vuetify.theme.dark ? 'white' : 'black'"
        @click="$emit('hideClock')"
        ><v-icon size="25">mdi-chevron-down</v-icon></v-btn
      ></v-toolbar
    >
    <v-card :color="$vuetify.theme.dark ? '#121212' : '#FFFFFF'"
      ><v-card-title
        :class="$vuetify.breakpoint.xsOnly ? 'text-h2' : 'text-h1'"
        class="justify-center align-center"
        >{{ dateTime.hours }}:{{ dateTime.minutes }}{{ " "
        }}{{ dateTime.ampm }}</v-card-title
      ><v-card-subtitle
        :class="$vuetify.breakpoint.xsOnly ? 'text-h4' : 'text-h3'"
        class="text-h3 text-center mt-2"
        >{{ dateTime.date }}</v-card-subtitle
      >
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  components: {},
  props: { showClock: Boolean, dateTime: Object },
  data: () => ({}),
};
</script>
<style>
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
