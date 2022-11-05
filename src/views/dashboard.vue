<template>
  <v-container fluid>
    <v-card-title :class="$vuetify.breakpoint.mdAndUp ? 'text-h4' : 'text-h5'"
      >{{ getGreetingData }},User!</v-card-title
    >
  </v-container>
</template>
<script>
export default {
  name: "dashboard-component",
  data: () => ({}),
  computed: {
    getGreetingData() {
      var today = new Date();
      var curHr = today.getHours();
      return curHr < 12
        ? "Good Morning"
        : curHr > 18
        ? "Good Evening"
        : "Good Afternoon";
    },
  },
};
</script>
